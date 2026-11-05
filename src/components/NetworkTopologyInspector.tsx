"use client";

import { useState } from "react";
import {
  Network,
  ShieldCheck,
  Server,
  Router,
  Wifi,
  Lock,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Terminal,
} from "lucide-react";

type Protocol = "OSPF" | "DHCP" | "ACL" | "NAT";

interface SimulationStep {
  step: string;
  source: string;
  target: string;
  detail: string;
  ciscoCli: string;
  status: "OK" | "DENIED" | "TRANSLATED";
}

export default function NetworkTopologyInspector() {
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol>("OSPF");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulationData: Record<Protocol, SimulationStep[]> = {
    OSPF: [
      {
        step: "01 / HELLO PACKET BROADCAST",
        source: "Core-Router-A (Area 0)",
        target: "Core-Router-B",
        detail: "Multicast Hello dispatched to 224.0.0.5 to discover OSPF neighbors across backbone Area 0.",
        ciscoCli: "Router(config-router)# network 10.0.0.0 0.0.0.3 area 0",
        status: "OK",
      },
      {
        step: "02 / 2-WAY NEIGHBOR STATE",
        source: "Core-Router-B",
        target: "Core-Router-A",
        detail: "Bi-directional communication confirmed; Router ID 10.0.0.2 registered in neighbor table.",
        ciscoCli: "Router# show ip ospf neighbor",
        status: "OK",
      },
      {
        step: "03 / LINK-STATE ADVERTISEMENT (LSA)",
        source: "Distribution-Switch-1",
        target: "Backbone Core",
        detail: "Topology updates broadcasted with cost metric calculations using Dijkstra SPF algorithm.",
        ciscoCli: "Router# show ip ospf database",
        status: "OK",
      },
      {
        step: "04 / FULL CONVERGENCE ACHIEVED",
        source: "Routing Engine",
        target: "Routing Table",
        detail: "Optimal shortest paths injected for all hotel subnets (500+ endpoints converge < 2s).",
        ciscoCli: "Router# show ip route ospf",
        status: "OK",
      },
    ],
    DHCP: [
      {
        step: "01 / DHCP DISCOVER",
        source: "Guest-Laptop (VLAN 30)",
        target: "Distribution-Switch",
        detail: "Client broadcasts Layer 2 discovery request (0.0.0.0:68 -> 255.255.255.255:67).",
        ciscoCli: "Switch(config-if)# ip helper-address 10.10.40.10",
        status: "OK",
      },
      {
        step: "02 / DHCP OFFER",
        source: "Central DHCP Server",
        target: "Guest-Laptop",
        detail: "Server offers 172.16.30.45 from pool 'GUEST_POOL' with subnet mask /24 and lease 24hrs.",
        ciscoCli: "Router(config)# ip dhcp pool GUEST_POOL\nRouter(dhcp-config)# network 172.16.30.0 255.255.255.0",
        status: "OK",
      },
      {
        step: "03 / DHCP REQUEST",
        source: "Guest-Laptop",
        target: "Central DHCP Server",
        detail: "Client formally requests proposed IP 172.16.30.45 and DNS gateway configuration.",
        ciscoCli: "Router(dhcp-config)# default-router 172.16.30.1\nRouter(dhcp-config)# dns-server 8.8.8.8",
        status: "OK",
      },
      {
        step: "04 / DHCP ACKNOWLEDGE",
        source: "Central DHCP Server",
        target: "Guest-Laptop",
        detail: "Lease committed; client binds IP 172.16.30.45 and gateway 172.16.30.1 for internet access.",
        ciscoCli: "Router# show ip dhcp binding",
        status: "OK",
      },
    ],
    ACL: [
      {
        step: "01 / TRAFFIC INITIATION",
        source: "Guest Terminal (172.16.30.88)",
        target: "Mgmt Server (192.168.10.5)",
        detail: "Untrusted Guest attempts TCP port 22 (SSH) connection into administrative VLAN 10.",
        ciscoCli: "Guest-CLI> ssh -l admin 192.168.10.5",
        status: "OK",
      },
      {
        step: "02 / ACL EVALUATION",
        source: "Distribution Switch (Inbound ACL 101)",
        target: "Packet Filter Engine",
        detail: "Extended Access Control List 101 checks rule against source subnet 172.16.30.0/24.",
        ciscoCli: "Router(config)# access-list 101 deny ip 172.16.30.0 0.0.0.255 192.168.10.0 0.0.0.255",
        status: "OK",
      },
      {
        step: "03 / PACKET DROP & LOGGING",
        source: "Access Control Engine",
        target: "Console Syslog",
        detail: "Packet immediately dropped; implicit permit allows general Internet traffic only.",
        ciscoCli: "%SEC-6-IPACCESSLOGP: list 101 denied tcp 172.16.30.88(51240) -> 192.168.10.5(22), 1 packet",
        status: "DENIED",
      },
      {
        step: "04 / PERMIT REMAINING TRAFFIC",
        source: "Access Control Engine",
        target: "Outbound Gateway",
        detail: "Guest packet targeting public web permitted via standard outbound rule.",
        ciscoCli: "Router(config)# access-list 101 permit ip any any",
        status: "OK",
      },
    ],
    NAT: [
      {
        step: "01 / PRIVATE PACKET DISPATCH",
        source: "Internal Staff (192.168.20.14)",
        target: "Public Web (142.250.190.46)",
        detail: "RFC 1918 private IP packet reaches Core Router gateway with source port 49152.",
        ciscoCli: "Router(config-if)# ip nat inside",
        status: "OK",
      },
      {
        step: "02 / PAT TABLE LOOKUP",
        source: "Core NAT Engine",
        target: "NAT Translation Table",
        detail: "Core router allocates public WAN IP 196.188.42.10 and unique translation port 10255.",
        ciscoCli: "Router(config)# ip nat inside source list 1 interface GigabitEthernet0/0 overload",
        status: "TRANSLATED",
      },
      {
        step: "03 / OUTBOUND FORWARDING",
        source: "WAN Interface Gi0/0",
        target: "ISP Gateway",
        detail: "Packet egresses to Internet with public identity 196.188.42.10:10255.",
        ciscoCli: "Router# show ip nat translations",
        status: "OK",
      },
      {
        step: "04 / INBOUND RETURN DEMUX",
        source: "Internet Web Server",
        target: "Staff Workstation",
        detail: "Incoming HTTP response mapped back from port 10255 to internal host 192.168.20.14.",
        ciscoCli: "NAT: s=142.250.190.46 d=196.188.42.10:10255 -> 192.168.20.14:49152",
        status: "OK",
      },
    ],
  };

  const steps = simulationData[selectedProtocol];
  const currentStep = steps[activeStepIndex];

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setActiveStepIndex(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1500);
  };

  return (
    <div className="w-full border border-mono-800 bg-monocard p-6 md:p-8 space-y-8 font-mono text-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-monoborder gap-4">
        <div className="space-y-1">
          <div className="mono-tag text-electric text-[10px] flex items-center space-x-1.5">
            <Network className="w-3.5 h-3.5" />
            <span>HAILE HOTELS &bull; CISCO PACKET TRACER TOPOLOGY INSPECTOR</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-mono-100">
            ENTERPRISE NETWORK PROTOCOL SIMULATOR
          </h3>
          <p className="text-mono-400 text-xs max-w-2xl">
            Simulate and inspect actual routing convergence, DHCP address pools, ACL packet filtering, and NAT/PAT translation from my verified Cisco Packet Tracer network model.
          </p>
        </div>

        {/* Protocol Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
          {(["OSPF", "DHCP", "ACL", "NAT"] as Protocol[]).map((proto) => (
            <button
              key={proto}
              onClick={() => {
                setSelectedProtocol(proto);
                setActiveStepIndex(0);
                setIsSimulating(false);
              }}
              className={`px-3 py-1.5 border font-bold text-xs transition-colors ${
                selectedProtocol === proto
                  ? "border-electric bg-electric text-monodark"
                  : "border-mono-800 bg-monodark text-mono-300 hover:border-mono-600 hover:text-electric"
              }`}
            >
              {proto}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Campus Topology Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
        <div className="p-3 border border-mono-800 bg-monodark space-y-1">
          <div className="text-[10px] text-mono-500 uppercase">CORE LAYER</div>
          <div className="text-mono-100 font-bold text-xs">Dual Cisco 2911</div>
          <div className="text-electric text-[10px]">OSPF Area 0 &bull; NAT/PAT</div>
        </div>

        <div className="p-3 border border-mono-800 bg-monodark space-y-1">
          <div className="text-[10px] text-mono-500 uppercase">DISTRIBUTION LAYER</div>
          <div className="text-mono-100 font-bold text-xs">Cisco 3560-24PS</div>
          <div className="text-electric text-[10px]">Inter-VLAN &bull; ACL 101</div>
        </div>

        <div className="p-3 border border-mono-800 bg-monodark space-y-1">
          <div className="text-[10px] text-mono-500 uppercase">ACCESS LAYER</div>
          <div className="text-mono-100 font-bold text-xs">Cisco 2960 Switches</div>
          <div className="text-electric text-[10px]">VLAN Trunking (802.1Q)</div>
        </div>

        <div className="p-3 border border-mono-800 bg-monodark space-y-1">
          <div className="text-[10px] text-mono-500 uppercase">HOTEL SEGREGATION</div>
          <div className="text-mono-100 font-bold text-xs">4 Isolated Subnets</div>
          <div className="text-electric text-[10px]">Staff, Guest, Mgmt, Server</div>
        </div>
      </div>

      {/* Interactive Simulation Tracer Window */}
      <div className="border border-mono-800 bg-monodark p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-monoborder gap-3">
          <div className="flex items-center space-x-2">
            <span className="mono-tag text-xs text-electric font-bold">
              ACTIVE TRACER: {selectedProtocol} PROTOCOL
            </span>
            <span className="text-mono-500 text-[11px]">
              [STEP {activeStepIndex + 1} OF {steps.length}]
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="flex items-center space-x-1.5 border border-mono-100 bg-mono-100 text-monodark px-3 py-1 font-bold text-xs hover:bg-electric hover:border-electric transition-colors disabled:opacity-50"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{isSimulating ? "RUNNING..." : "TRIGGER PACKET TRACE"}</span>
            </button>
            <button
              onClick={() => {
                setActiveStepIndex(0);
                setIsSimulating(false);
              }}
              className="p-1 border border-mono-800 hover:border-electric text-mono-400 hover:text-electric transition-colors"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Step Visualizer */}
        <div className="grid grid-cols-4 gap-2">
          {steps.map((s, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-2.5 border cursor-pointer transition-all ${
                activeStepIndex === idx
                  ? "border-electric bg-electric/10 text-mono-100 font-bold"
                  : idx < activeStepIndex
                  ? "border-mono-800 bg-monocard text-mono-400"
                  : "border-mono-900 bg-monodark text-mono-600"
              }`}
            >
              <div className="text-[10px] uppercase font-mono">
                PHASE 0{idx + 1}
              </div>
              <div className="text-[11px] truncate mt-0.5">
                {s.step.split("/")[1] || s.step}
              </div>
            </div>
          ))}
        </div>

        {/* Current Step Telemetry Card */}
        <div className="border border-mono-800 bg-monocard p-5 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="mono-tag text-electric text-[10px] font-bold">
                {currentStep.step}
              </span>
              <div className="text-sm font-bold text-mono-100 mt-1">
                {currentStep.source} &rarr; {currentStep.target}
              </div>
            </div>

            <span
              className={`px-2.5 py-0.5 text-[10px] font-bold border ${
                currentStep.status === "OK"
                  ? "border-electric/40 text-electric bg-electric/10"
                  : currentStep.status === "DENIED"
                  ? "border-red-500/40 text-red-400 bg-red-500/10"
                  : "border-amber-400/40 text-amber-400 bg-amber-400/10"
              }`}
            >
              {currentStep.status === "OK" ? "PACKET PERMITTED" : currentStep.status === "DENIED" ? "DROPPED BY ACL" : "PAT TRANSLATED"}
            </span>
          </div>

          <p className="text-mono-300 text-xs leading-relaxed">
            {currentStep.detail}
          </p>

          {/* Cisco CLI Configuration Box */}
          <div className="space-y-1.5 pt-2 border-t border-monoborder">
            <div className="text-[10px] text-mono-500 uppercase flex items-center space-x-1">
              <Terminal className="w-3 h-3 text-electric" />
              <span>Cisco IOS Configuration / Verification Command:</span>
            </div>
            <pre className="p-3 bg-monodark border border-mono-800 text-electric text-[11px] overflow-x-auto selection:bg-electric selection:text-monodark">
              <code>{currentStep.ciscoCli}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

