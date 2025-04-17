import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold text-primary">Ganga Enterprises</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete Repairing & Service of Industrial Instruments, PLC, HMI, Touch Panel and Electronic/Electrical
              Spare Parts
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-muted-foreground hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  PLC Repair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  HMI & Touch Panel Repair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  AC & Servo Drive Repair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Electronics Card Repair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Spare Parts Supply
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="space-y-2 text-sm not-italic">
              <p className="text-muted-foreground">Pradhan Market, Birondi, Sec-Pi, Greater Noida</p>
              <p className="text-muted-foreground">Rajeev Tyagi (Director): 7037531679</p>
              <p className="text-muted-foreground">Ritesh Kumar (Manager): 8447081635</p>
              <p className="text-muted-foreground">Sachin Choudhary (Dy.director): 9813754031</p>
              <p className="text-muted-foreground">Email: gangaenterprises2019@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ganga Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
