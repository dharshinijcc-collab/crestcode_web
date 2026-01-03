'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { typography, spacing } from "@/lib/typography";
import { 
  Shield, 
  Database, 
  Lock, 
  Users, 
  Clock, 
  Baby, 
  FileText, 
  Mail,
  ChevronRight,
  User,
  Eye,
  Server,
  UserCheck,
  AlertCircle
} from "lucide-react";

export default function privacypolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Hero Section */}
      <section className="bg-[#9BB4C2] py-12 md:py-16">
        <div className={spacing.containerSmall + " text-center"}>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#111827] rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className={typography.h1 + " mb-4"}>CrestCode Privacy Policy</h1>
          <p className={typography.pLarge + " mb-6"}>
            Last updated: Sep 18, 2025
          </p>
          <p className={typography.p + " max-w-3xl mx-auto"}>
            CrestCode values your trust and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use CrestCode's services.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16">
        <div className={spacing.container}>
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* 1. Information We Collect */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>1. Information We Collect</h2>
              </div>
              <p className={typography.p + " mb-6"}>
                CrestCode is designed to help you organize your digital life while keeping your data private and secure. We may collect:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Account Information:</h3>
                    <p className={typography.p}>Name, email address, and login credentials when you sign up.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Usage Information:</h3>
                    <p className={typography.p}>How you interact with CrestCode (features used, time spent).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Optional Data You Add:</h3>
                    <p className={typography.p}>Notes, reminders, bookmarks, files, or other content you choose to store in CrestCode.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  <strong>We do not sell your personal information or data.</strong>
                </p>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>2. How We Use Your Information</h2>
              </div>
              <p className={typography.p + " mb-6"}>
                We use your information to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Deliver and maintain our services to you</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Process transactions and send related information</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Send technical notices, updates, security alerts, and support messages</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Respond to your comments, questions, and requests</span>
                </li>
              </ul>
            </div>

            {/* 3. Data Storage & Security */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>3. Data Storage & Security</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>All data is encrypted in transit (TLS) and at rest.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Sensitive information (e.g., passwords in the Vault) is stored using industry-standard encryption and never shared with CrestCode staff.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>We regularly review our security practices to protect against unauthorized access.</span>
                </li>
              </ul>
            </div>

            {/* 4. Sharing of Information */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>4. Sharing of Information</h2>
              </div>
              <p className={typography.p + " mb-6"}>
                We do not sell or rent your personal information. We may share your information only in these limited circumstances:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">With your consent</h3>
                  <p className={typography.p + " text-blue-800"}>(e.g., integrations with third-party apps).</p>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">For legal reasons</h3>
                  <p className={typography.p + " text-orange-800"}>(if required by law, regulation, or valid legal process).</p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Service providers</h3>
                  <p className={typography.p + " text-purple-800"}>that help us operate CrestCode (e.g., cloud hosting providers), under strict confidentiality and security obligations.</p>
                </div>
              </div>
            </div>

            {/* 5. Your Rights */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>5. Your Rights</h2>
              </div>
              <p className={typography.p + " mb-6"}>
                Depending on where you live, you may have the right to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Know and control the personal data we collect</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Access and receive a copy of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Request correction or deletion of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={typography.p}>Object to or restrict processing of your personal data</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className={typography.p}>
                  To exercise these rights, contact us at <a href="mailto:contact@cctps.com" className="text-blue-600 hover:text-blue-700 font-medium">contact@cctps.com</a>.
                </p>
              </div>
            </div>

            {/* 6. Data Retention */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>6. Data Retention</h2>
              </div>
              <p className={typography.p}>
                We retain your information only as long as necessary to provide the Service, comply with legal obligations, and resolve disputes. You can request deletion of your account and data at any time.
              </p>
            </div>

            {/* 7. Children's Privacy */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>7. Children's Privacy</h2>
              </div>
              <p className={typography.p}>
                CrestCode is not intended for children under 13 (or the minimum age in your country). We do not knowingly collect data from children without parental consent.
              </p>
            </div>

            {/* 8. Changes to This Policy */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>8. Changes to This Policy</h2>
              </div>
              <p className={typography.p}>
                We may update this Privacy Policy from time to time. If changes are material, we will notify you by email or within the app before they take effect.
              </p>
            </div>

            {/* 9. Contact Us */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className={typography.h2}>9. Contact Us</h2>
              </div>
              <p className={typography.p + " mb-6"}>
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">CrestCode Support Team</h3>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email:</h3>
                    <a href="mailto:contact@cctps.com" className="text-blue-600 hover:text-blue-700">contact@cctps.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#9BB4C2] py-8 md:py-10">
        <div className={spacing.container}>
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center">
            <h2 className={typography.h2 + " mb-4"}>
              Have Questions About Your Privacy?
            </h2>
            <p className={typography.p + " mb-6 max-w-2xl mx-auto"}>
              We're here to help. If you have any concerns about your data or privacy practices, don't hesitate to reach out.
            </p>
            <Button size="lg">
              <Link href="/Getintouch">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}