import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Products() {
  return (
    <section id="products" className="bg-muted/50 py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Products We Deal In</h2>
          <p className="text-muted-foreground">
            We offer a wide range of electronic and electrical spare parts for industrial automation systems.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-4">
              <Image
                src="/images/pvc.jpeg"
                alt="PLC Systems"
                width={400}
                height={200}
                className="rounded-md object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>PLC Systems</CardTitle>
              <CardDescription className="mt-2">
                Programmable Logic Controllers from leading manufacturers for industrial automation.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <Image
                src="/images/hdmi.jpeg"
                alt="HMI Devices"
                width={400}
                height={200}
                className="rounded-md object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>HMI Devices</CardTitle>
              <CardDescription className="mt-2">
                Human Machine Interface panels and touchscreens for industrial control systems.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <Image
                src="/images/spindle.jpeg"
                alt="AC Drives"
                width={400}
                height={200}
                className="rounded-md object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>AC Drives</CardTitle>
              <CardDescription className="mt-2">
                Variable frequency drives for controlling AC motor speed and torque.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <Image
                src="/images/monitor.jpeg"
                alt="Servo Drives"
                width={400}
                height={200}
                className="rounded-md object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>Servo Drives</CardTitle>
              <CardDescription className="mt-2">
                High-performance motion control systems for precise positioning applications.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <Image
                src="/images/electronic.jpeg"
                alt="Electronic Cards"
                width={400}
                height={200}
                className="rounded-md object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>Electronic Cards</CardTitle>
              <CardDescription className="mt-2">
                Various electronic circuit boards and control cards for industrial equipment.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <Image
                src="/images/electronic.jpeg"
                alt="Electrical Components"
                width={400}
                height={200}
                className="rounded-md object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>Electrical Components</CardTitle>
              <CardDescription className="mt-2">
                Switches, relays, contactors, and other electrical components for industrial systems.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
