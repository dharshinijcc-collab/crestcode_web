import Link  from "next/link";
import { Button } from "@/components/ui/button";
import { typography, spacing } from "@/lib/typography";

export default function termsofservice() {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Hero Section */}
      <div className="w-full py-6 px-4">
        <div className={spacing.containerSmall + " text-center space-y-2"}>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-base text-gray-700">
            CrestCode Technologies Pvt Ltd
          </p>
          <p className="text-sm text-gray-600">
            Effective Date: January 1, 2025
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className={spacing.container + " pb-6 md:pb-10"}>
        <div className="bg-white shadow-sm p-4 md:p-6">
          
          {/* Section 1: Introduction */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              1. INTRODUCTION
            </h2>
            <div className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                Welcome to CrestCode Technologies Pvt Ltd ("Company," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our services, including software development, consulting, and participation in hackathons and events organized by CrestCode Technologies Pvt Ltd.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                By engaging with our services or participating in our events, you ("Client," "Participant," "you," or "your") agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services or participate in our events.
              </p>
            </div>
          </section>

          {/* Section 2: Company Services */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              2. COMPANY SERVICES
            </h2>

            {/* 2.1 Software Development Services */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                2.1 Software Development Services
              </h3>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                By engaging with our services or participating in our events, you ("Client," "Participant," "you," or "your") agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services or participate in our events.
              </p>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                CrestCode provides custom software development services including but not limited to:
              </p>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• Web application development</li>
                <li>• Mobile application development</li>
                <li>• Software architecture and design</li>
                <li>• System integration services</li>
                <li>• Technical consulting</li>
                <li>• Project management</li>
              </ul>
            </div>

            {/* 2.2 Client Collaboration */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                2.2 Client Collaboration
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We work primarily with entrepreneurs, ideators, startups, and businesses looking to develop software solutions. Our services are tailored to transform ideas into functional software products.
              </p>
            </div>

            {/* 2.3 Service Delivery */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                2.3 Service Delivery
              </h3>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                We work primarily with entrepreneurs, ideators, startups, and businesses looking to develop software solutions. Our services are tailored to transform ideas into functional software products.
              </p>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• All services will be provided according to agreed specifications and timelines outlined in separate service agreements or statements of work</li>
                <li>• We reserve the right to modify our service offerings at any time</li>
                <li>• Service availability may vary and is not guaranteed to be uninterrupted</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Intellectual Property Rights */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              3. INTELLECTUAL PROPERTY RIGHTS
            </h2>

            {/* 3.1 Client Intellectual Property */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                3.1 Client Intellectual Property
              </h3>

              {/* Important Notice Box */}
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 w-1.5 md:w-2 h-full bg-blue-600 rounded-l-lg"></div>
                <div className="ml-1.5 md:ml-2 bg-blue-50 rounded-r-lg p-4 md:p-6 lg:p-8">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    IMPORTANT:
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    CrestCode Technologies Pvt Ltd does NOT claim ownership rights over ideas, concepts, business models, or intellectual property shared by clients during the course of our engagement. All client ideas and intellectual property remain the exclusive property of the client.
                  </p>
                </div>
              </div>
            </div>

            {/* 3.2 Developed Software */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                3.2 Developed Software
              </h3>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• Custom software developed specifically for a client belongs to the client upon full payment</li>
                <li>• Any pre-existing code, frameworks, libraries, or tools used by CrestCode remain our property</li>
                <li>• Third-party components and open-source software are governed by their respective licenses</li>
              </ul>
            </div>

            {/* 3.3 CrestCode Technologies Intellectual Property */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                3.3 CrestCode Technologies Pvt Ltd Intellectual Property
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                All proprietary methodologies, processes, tools, and general knowledge developed by CrestCode Technologies Pvt Ltd remain our intellectual property.
              </p>
            </div>
          </section>

          {/* Section 4: Hackathon Terms */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              4. HACKATHON TERMS
            </h2>

            {/* 4.1 Hackathon Participation */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                4.1 Hackathon Participation
              </h3>

              {/* Important Notice Red Box */}
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 w-1.5 md:w-2 h-full bg-red-500 rounded-l-lg"></div>
                <div className="ml-1.5 md:ml-2 bg-red-100/20 rounded-r-lg p-4 md:p-6 lg:p-8">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    IMPORTANT NOTICE:
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    Participants must understand that any submissions selected as winners or awarded prizes will have their intellectual property rights transferred to CrestCode Technologies Pvt Ltd. Only participate if you agree to this condition.
                  </p>
                </div>
              </div>
            </div>

            {/* 4.2 Eligibility */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                4.2 Eligibility
              </h3>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• Participants must be at least 18 years old or have parental consent</li>
                <li>• Registration is required for participation</li>
                <li>• CrestCode Technologies Pvt Ltd reserves the right to refuse participation to anyone</li>
                <li>• Only graduates of the years 2025, 2026, and 2027 are eligible to participate in the hackathon. Participants must provide proof of graduation or expected graduation from these specific years, when requested</li>
              </ul>
            </div>

            {/* 4.3 Hackathon Intellectual Property */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                4.3 Hackathon Intellectual Property
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  <span className="font-semibold">Selected/Awarded Projects: </span>
                  Any ideas, concepts, projects, or solutions that are selected as winners, receive awards, or are chosen by CrestCode Technologies Pvt Ltd during the hackathon automatically become the intellectual property of CrestCode Technologies Pvt Ltd.
                </p>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  <span className="font-semibold">Non-Selected Submissions: </span>
                  Ideas, concepts, and projects that are not selected or awarded remain the intellectual property of the participants/teams who created them.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold">Pre-existing IP: </span>
                  Any pre-existing intellectual property brought to the hackathon remains with its original owners, except when incorporated into selected/awarded submissions.
                </p>
              </div>
            </div>

            {/* 4.4 Awards and Certificates */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                4.4 Awards and Certificates
              </h3>

              {/* Yellow Warning Box */}
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 w-1.5 md:w-2 h-full bg-yellow-500 rounded-l-lg"></div>
                <div className="ml-1.5 md:ml-2 bg-yellow-100/20 rounded-r-lg p-4 md:p-6 lg:p-8">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Complete Submission Requirement:
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    Awards, prizes, and participation certificates will ONLY be provided to participants who submit complete, functional projects that meet the hackathon requirements. Incomplete submissions will not receive any awards, prizes, or certificates.
                  </p>
                </div>
              </div>
            </div>

            {/* 4.5 Code of Conduct */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                4.5 Code of Conduct
              </h3>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• Participants must maintain professional and respectful behavior</li>
                <li>• Any form of harassment, discrimination, or inappropriate conduct will result in immediate disqualification</li>
                <li>• CrestCode reserves the right to remove participants who violate the code of conduct</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Payment Terms */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              5. PAYMENT TERMS
            </h2>

            {/* 5.1 Service Fees */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                5.1 Service Fees
              </h3>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• Payment terms will be specified in individual service agreements</li>
                <li>• All fees are exclusive of applicable taxes unless otherwise stated</li>
                <li>• Late payments may incur additional charges as specified in service agreements</li>
              </ul>
            </div>

            {/* 5.2 Refund Policy */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                5.2 Refund Policy
              </h3>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• Refund policies will be outlined in individual service agreements</li>
                <li>• Generally, work completed cannot be refunded</li>
                <li>• Unused portions of prepaid services may be refunded at our discretion</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Confidentiality */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              6. CONFIDENTIALITY
            </h2>

            {/* 6.1 Mutual Confidentiality */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                6.1 Mutual Confidentiality
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information shared during the course of engagement.
              </p>
            </div>

            {/* 6.2 Non-Disclosure */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                6.2 Non-Disclosure
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                CrestCode will not disclose client information, business strategies, or technical details to third parties without explicit written consent, except as required by law.
              </p>
            </div>
          </section>

          {/* Section 7: Limitation of Liability */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              7. LIMITATION OF LIABILITY
            </h2>

            {/* 7.1 Service Limitations */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                7.1 Service Limitations
              </h3>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• Services are provided "as is" without warranties of any kind</li>
                <li>• CrestCode Technologies Pvt Ltd's liability is limited to the amount paid for services</li>
                <li>• We are not liable for indirect, incidental, or consequential damages</li>
              </ul>
            </div>

            {/* 7.2 Force Majeure */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                7.2 Force Majeure
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                CrestCode Technologies Pvt Ltd is not liable for delays or failures due to circumstances beyond our reasonable control, including natural disasters, government actions, or technical failures.
              </p>
            </div>
          </section>

          {/* Section 8: Termination */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              8. TERMINATION
            </h2>

            {/* 8.1 Termination Rights */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                8.1 Termination Rights
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Either party may terminate services with written notice as specified in individual service agreements.
              </p>
            </div>

            {/* 8.2 Effect of Termination */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                8.2 Effect of Termination
              </h3>
              <ul className="space-y-1.5 ml-4 text-gray-700 text-sm leading-relaxed">
                <li>• Outstanding payments become immediately due</li>
                <li>• Confidentiality obligations survive termination</li>
                <li>• Client retains rights to completed work upon full payment</li>
              </ul>
            </div>
          </section>

          {/* Section 9: Dispute Resolution */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              9. DISPUTE RESOLUTION
            </h2>

            {/* 9.1 Governing Law */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                9.1 Governing Law
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                These Terms are governed by the laws of India and the state of Tamil Nadu.
              </p>
            </div>

            {/* 9.2 Jurisdiction */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                9.2 Jurisdiction
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                All disputes arising from or relating to these Terms, our services, or hackathon participation must be resolved exclusively in the courts of Chennai, Tamil Nadu, India. Both parties submit to the exclusive jurisdiction of Chennai courts.
              </p>
            </div>

            {/* 9.3 Mediation */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                9.3 Mediation
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Before pursuing legal action, parties agree to attempt resolution through good faith negotiation and, if necessary, mediation.
              </p>
            </div>
          </section>

          {/* Section 10: General Provisions */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              10. GENERAL PROVISIONS
            </h2>

            {/* 10.1 Modifications */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                10.1 Modifications
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                CrestCode Technologies Pvt Ltd reserves the right to modify these Terms at any time. Updated Terms will be posted on our website and take effect immediately.
              </p>
            </div>

            {/* 10.2 Severability */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                10.2 Severability
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* 10.3 Entire Agreement */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                10.3 Entire Agreement
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                These Terms, together with any applicable service agreements, constitute the entire agreement between the parties.
              </p>
            </div>

            {/* 10.4 Contact Information */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                10.4 Contact Information
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                For questions about these Terms, please contact:
              </p>
              <div className="ml-6 md:ml-12 space-y-2">
                <p className="text-base font-semibold text-gray-800">
                  CrestCode Technologies Pvt Ltd
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Email: contact@crestcode.in
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Address: Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </section>

          {/* Section 11: Acceptance */}
          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              11. ACCEPTANCE
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed ml-4 md:ml-6">
              By using our services or participating in our events, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 md:mt-8">
          <p className="text-sm font-medium text-gray-600">
            Last Updated: January 1, 2025
          </p>
        </div>
      </div>
    </div>
  );
}