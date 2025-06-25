"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import emailjs from "@emailjs/browser";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import Link from "next/link";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init("OWBR0J_ljw6zXpr6w");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (!form.current) return;

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        "service_b4cishj", // Your Service ID
        "template_om3con9", // Your Template ID
        form.current,
        "OWBR0J_ljw6zXpr6w" // Your Public Key
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        if (form.current) {
          form.current.reset();
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-4 inset-0 bg-gradient-to-br via-purple-400/30 to-pink-100/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-750/20 "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl  mb-4 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className=" max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
            to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-blue-600 font-bold mb-4">
                Let&apos;s Start a Conversation
              </h3>
              <p className=" mb-8">
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-4 rounded-lg border shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-200  p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 ">Email</h4>
                    <Link href="mailto:tahmina.afroz8801@gmail.com">
                      <p className="text-blue-600 dark:text-white font-medium text-sm underline ">
                        tahmina.afroz8801@gmail.com
                      </p>
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      Send me an email anytime!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-200 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-600 dark:text-white font-medium text-sm">
                      +1 (000) 000-0000
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Mon-Fri from 8am to 6pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-200 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>

                    <Link href="https://www.mapquest.com/us/new-york/queens-ny-283585649">
                      <p className=" text-blue-600 dark:text-white font-medium text-sm ">
                        Queens,NewYork
                      </p>
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      Available for remote work
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-300 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Response time</h4>
                    <p className="font-medium text-sm text-blue-600 dark:text-white">
                      24 hours
                    </p>
                    <p className="text-xs text-muted-foreground">
                      I&apos;ll back to you Quickly
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* EmailJS Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-xl border"
            >
              {" "}
              {/* <div className=" pl-50 flex gap-20">
                <Link href="mailto:tahmina.afroz8801@gmail.com">
                  <Button className="bg-blue-600 ">Email me</Button>
                </Link>
                <Link href="tel:+13476598801">
                  <Button className="bg-blue-600 ">Text me</Button>
                </Link>
              </div> */}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-lg border shadow-sm"
          >
            {/* Status Messages */}
            {submitStatus === "success" && (
              <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  🎉 Success! Your message has been sent via EmailJS. I&apos;ll
                  get back to you soon!
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert className="mb-6 border-red-200 bg-red-50 dark:bg-red-950/20">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 dark:text-red-200">
                  ❌ Sorry, there was an error sending your message via EmailJS.
                  Please try again or email me directly.
                </AlertDescription>
              </Alert>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium">
                    Name *
                  </label>
                  <Input
                    id="user_name"
                    name="user_name"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-6">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Hidden fields for EmailJS template */}
              <input
                type="hidden"
                name="to_email"
                value="your.email@gmail.com"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending via EmailJS...
                  </>
                ) : (
                  <>
                    <Send className=" mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Send Message via Email
                  </>
                )}
              </Button>
              {/* EmailJS Info */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-muted-foreground text-center">
                    Powered by - Direct delivery to Gmail inbox
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
