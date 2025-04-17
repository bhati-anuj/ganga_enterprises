import { CheckCircle2 } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="text-muted-foreground">
            We provide comprehensive repair and service solutions for a wide range of industrial automation equipment.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">PLC Repair & Service</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Troubleshooting and diagnostics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Component-level repairs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Firmware updates and programming</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Preventive maintenance</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">HMI & Touch Panel Repair</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Screen replacement and calibration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Circuit board repair</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Software restoration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Interface troubleshooting</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">AC & Servo Drive Repair</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Power module replacement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Control board repair</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Parameter configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Performance optimization</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">Electronics Card Repair</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Component-level diagnostics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Circuit board soldering and repair</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Functional testing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Quality assurance</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">Spare Parts Supply</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Electronic components</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Electrical spare parts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Automation equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Custom sourcing solutions</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">Technical Consultation</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>System troubleshooting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Equipment selection advice</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Upgrade recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Technical support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
