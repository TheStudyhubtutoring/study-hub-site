import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaInstagram } from "react-icons/fa";

export default function StudyHubTutoring() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">The Study Hub Tutoring</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#tutor" className="hover:underline">Your Tutor</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#plans" className="hover:underline">Plans</a>
            <a href="#booking" className="hover:underline">Enquiry</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Boost Your Grades With Expert Tutors</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Personalised, 1-to-1 and group tutoring to help students excel in their studies — online and in person.
        </p>
        <Button className="text-lg px-8 py-4">Book a Free Consultation</Button>
      </section>

      <section id="about" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          At The Study Hub Tutoring, we’re passionate about helping students achieve their full academic potential. Whether it’s primary school basics or 11+ prep, we’re here to support every step.
        </p>
      </section>

      <section id="tutor" className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Who Will Your Tutor Be?</h2>
        <div className="bg-white p-8 max-w-3xl mx-auto rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-4">Meet Nirav Karnik</h3>
          <p className="text-lg mb-4">
            Hi! I'm Nirav, a 15-year-old student currently attending one of the UK’s top grammar schools. I’ve been ranked among the top 100 students in the county and have a strong understanding of the current 11+ curriculum and how it’s tested.
          </p>
          <p className="text-lg mb-4">
            Having recently gone through the exact same process, I bring relevant experience, exam-smart strategies, and relatable support that helps younger students build confidence and perform at their best. I know how to manage time effectively during papers, tackle tricky question formats, and keep revision fun but focused.
          </p>
          <p className="text-lg mb-4">
            I’m not just a tutor — I’m someone who’s walked the path recently and can guide students with real insight and encouragement. Let’s build success together!
          </p>
          <a href="https://instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline mt-4">
            <FaInstagram className="mr-2" /> Follow me on Instagram
          </a>
        </div>
      </section>

      <section id="services" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">1-on-1 Tutoring</h3>
              <p>Tailored sessions focused on your child’s needs with flexible scheduling.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Group Sessions</h3>
              <p>Affordable learning with peers, ideal for revision and concept reinforcement.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Online Tutoring</h3>
              <p>Access expert help from anywhere with interactive, engaging digital sessions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="plans" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Group Access</h3>
              <p className="mb-2">£19.99/month</p>
              <p className="mb-4">Join live group tutoring every Saturday for 1 hour.</p>
              <a href="https://buy.stripe.com/9B628rdl06JM11m16T53O00" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Subscribe</Button>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Video + Group Access</h3>
              <p className="mb-2">£24.99/month</p>
              <p className="mb-4">Watch exclusive recorded video lessons on key 11+ topics and join weekly group sessions.</p>
              <a href="https://buy.stripe.com/fZu6oH3Kq6JM7pKg1N53O02" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Subscribe</Button>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">1-on-1 Sessions</h3>
              <p className="mb-2">£10/hour</p>
              <p className="mb-4">Book flexible personal tutoring sessions as needed.</p>
              <a href="https://buy.stripe.com/7sY4gzep4ece8tOg1N53O04" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Book Now</Button>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">All-Inclusive</h3>
              <p className="mb-2">£39.99/month</p>
              <p className="mb-4">Everything included: video access, weekly group sessions, and 4x 1-on-1 tutoring sessions per month.</p>
              <a href="https://buy.stripe.com/14A00jcgW0locK48zl53O03" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Subscribe</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="booking" className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">Enquire About a Membership Plan</h2>
        <form
          action="https://formspree.io/f/mnnvlkey"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
          
        >
          <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded" required />
          <input type="email" name="email" placeholder="Email Address" className="w-full border p-3 rounded" required />
          <select name="plan" className="w-full border p-3 rounded" required>
            <option value="">Which plan are you interested in?</option>
            <option value="Group Access">Group Access (£19.99/month)</option>
            <option value="Video + Group Access">Video + Group Access (£24.99/month)</option>
            <option value="All-Inclusive">All-Inclusive (£39.99/month)</option>
          </select>
          <textarea name="message" placeholder="Any questions or anything you'd like us to know?" className="w-full border p-3 rounded h-24" />
          <input type="hidden" name="_subject" value="New Membership Plan Enquiry from The Study Hub" />
          <input type="hidden" name="_autoresponse" value="Thanks for enquiring about our membership plans at The Study Hub Tutoring! We'll respond shortly with details. Follow us on Instagram for updates and tips!" />
          <Button type="submit" className="px-6 py-3 text-lg">Send Enquiry</Button>
        </form>
      </section>

      <section id="contact" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">Have questions or want to schedule a session? Reach out to us!</p>
        <form action="https://formspree.io/f/mnnvlkey" method="POST" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Name" className="w-full border p-3 rounded" />
          <input type="email" name="email" placeholder="Email" className="w-full border p-3 rounded" />
          <textarea name="message" placeholder="Message" className="w-full border p-3 rounded h-32" />
          <Button type="submit" className="px-6 py-3 text-lg">Send Message</Button>
        </form>
      </section>

      <footer className="bg-blue-600 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} The Study Hub Tutoring. All rights reserved.</p>
      </footer>
    </div>
  );
}
