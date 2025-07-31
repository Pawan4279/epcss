import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Rajput <span className="text-primary">Crafts</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Excellence in Construction and IT Innovation under the expert leadership of Ajay Singh Rajput.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>7587542440</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>9424344872</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Civil Construction</li>
              <li>MEP Services</li>
              <li>Interior Design</li>
              <li>Electrical & Fixtures</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-300">
              <li>React.js & Next.js</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB</li>
              <li>Flutter & Dart</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Rajput Crafts. All rights reserved. | Director: Ajay Singh Rajput</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;