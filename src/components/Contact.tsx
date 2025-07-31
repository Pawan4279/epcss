import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Primary Contact",
      details: "7587542440",
      action: "tel:7587542440"
    },
    {
      icon: Phone,
      title: "Secondary Contact",
      details: "9424344872",
      action: "tel:9424344872"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@rajputcrafts.com",
      action: "mailto:contact@rajputcrafts.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "India",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-feature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Contact Ajay Singh Rajput for expert construction and IT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-lg transition-all duration-300 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.details}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-soft border border-border/50">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Why Choose Us?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Expert in both Construction and IT domains
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Quality-driven approach with proven results
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  End-to-end project management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Innovative solutions using latest technologies
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone
                </label>
                <Input type="tel" placeholder="Your phone number" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Type
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                  <option value="">Select a service</option>
                  <option value="construction">Construction Services</option>
                  <option value="it">IT Services</option>
                  <option value="both">Both Construction & IT</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;