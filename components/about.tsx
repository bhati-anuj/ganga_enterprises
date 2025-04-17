import { Building, Clock, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="bg-muted/50 py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">About Ganga Enterprises</h2>
          <p className="text-muted-foreground">
            We are a leading provider of industrial automation solutions, specializing in the repair and service of
            industrial instruments, PLC, HMI, and touch panels.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <Building className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl">Established Business</CardTitle>
              <CardDescription>Years of experience in industrial automation solutions</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl">Expert Team</CardTitle>
              <CardDescription>Skilled technicians and engineers with deep industry knowledge</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Clock className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl">Quick Turnaround</CardTitle>
              <CardDescription>Fast and efficient repair services to minimize downtime</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <MapPin className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl">Convenient Location</CardTitle>
              <CardDescription>Located in Pradhan Market, Birondi, Sec-Pi, Greater Noida</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
