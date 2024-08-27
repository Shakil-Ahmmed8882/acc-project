import Banner from "@/components/Banner/Banner";
import img from "@/assets/img/footerPage/privacy.jpg";
import Container from "@/components/shared/container/Container";
import ContactUs from "@/components/shared/FooterPages/contactUs/ContactUs";
import Information from "@/components/shared/FooterPages/Information/Information";
import AccUpdate from "@/components/shared/FooterPages/Information/AccUpdate";

const page = () => {
  

  const data = [
    {
      title: "TERMS OF USE",
      sections: [
        {
          subtitle: null,
          description: `
            The following user agreement ("Agreement") sets forth the terms upon which Achievement Cigar Company Inc. (“ACC”, “Us”, “Our” or “We”) offers you ("You" or "Your") access to Our website ("Site").
            
            Your use of this Site constitutes Your acceptance and agreement of the following terms:
          `
        },
        {
          subtitle: "1. YOUR USAGE OF SITE",
          description: `
            You may use this Site for lawful purposes only, and You are responsible for Your use of, communications with, and postings on this Site. You may not post on, provide access to, make available, or transmit through this Site any unlawful, infringing, threatening, harassing, abusive, libelous, defamatory, vulgar, obscene, profane, indecent, offensive, hateful, pornographic or otherwise objectionable material of any kind.
            
            Similarly, posting any of the following is prohibited: material that (a) encourages or solicits criminal conduct or conduct that would give rise to civil liability; (b) infringes others' intellectual property or other rights; (c) discloses private or personal matters concerning any person; (d) concerns products or items outside the scope of the Site; (e) violates laws relating to export control, consumer protection, unfair competition, anti-discrimination or false advertising; or (f) violates any other applicable local, state, national, foreign or international law.
            You may not use or allow others to use this Site in any manner that interferes with Site operation or with another user's use or enjoyment of this Site. You may not post or transmit on this Site any file or code that contains viruses, worms, "Trojan horses," malware, spyware, or any other contaminating, destructive or invasive features.
            You may not post or transmit on this Site any charity requests, petitions for signatures, chain letters, letters relating to pyramid schemes or similar documents.
            You may not post, provide access to, make available or transmit on this Site any advertising, promotional materials or any other solicitation of other users of this Site for goods or services except as expressly authorized by Us.
            
            You may not access this Site from any territory where its use or contents is illegal. You may not access this Site by any means except through the interface and Personal ID provided by Us. You may not link from a page on another site to any page on this Site except the home page. Any robots, spiders, crawlers or other automated software that You use to access this Site must comply with the Standard for Robot Exclusion and must use and comply with this Site's robots.txt files.
            You may not reproduce, distribute or transmit any copyrighted materials (whether registered or not) on this Site. All rights not expressly granted in this Agreement are reserved.
          `
        },
        {
          subtitle: "2. ADULT AUDIENCE",
          description: `
            This Site is intended only for use by adults. Access to this Site is limited to persons of legal age. Access is not authorized for users under 21 years of age.
            We believe that youth should not smoke. We take no actions to encourage youth smoking, and supports programs designed to discourage and reduce youth smoking. We do not engage in any advertising, promotion, or marketing intended to be aimed at minors. In addition, Our policies are designed to limit Our business communications to adults only. We take these issues and responsibilities very seriously.
          `
        },
        {
          subtitle: "3. USER SUBMISSIONS",
          description: `
            We are not responsible for monitoring, screening, policing or editing the information or materials posted on, submitted to, accessed or transmitted through this Site. We do not and cannot monitor all information or materials posted on, submitted to or transmitted through this Site. We do, however, reserve the right to delete, block or remove any information or materials that We, in Our sole discretion, deem unlawful, infringing, defamatory, libelous, abusive, threatening, obscene, offensive, fraudulent, deceptive, inappropriate or otherwise unacceptable to Us. If We are notified of any such information or materials on this Site, We will determine, in Our sole discretion, whether to remove such content from the Site or repost such content to this Site, and to restrict Your access to the Site.
            Although We appreciate people's interest in its business, it is Our policy to decline consideration of unsolicited ideas and suggestions offered or submitted by the general public. We rely on Our research and marketing staffs to generate and implement new concepts. This is necessary to avoid misunderstandings over the origin of particular ideas. We are constantly generating new ideas, many of which We may not use until years after they are first conceived. Accordingly, We do not accept unsolicited ideas for consideration, and We ask that You not submit ideas for products, advertising, etc.
            You may not upload, post or otherwise make available on this Site any material protected by copyright, trademark, trade secret or other proprietary right without the express permission of the owner of such copyright, trademark, trade secret or other proprietary right, and the burden of determining that you have such permission rests with You.
            You will have no recourse against Us for any alleged or actual infringement or misappropriation of any proprietary or other right in Your submissions, postings or communications to Us.
            It is Our policy to respond promptly to claims of intellectual property infringement and other violations of law. We will investigate claims of alleged infringement and take appropriate actions under the Digital Millennium Copyright Act ("DMCA"). Upon receiving notification that complies or substantially complies with the DMCA (as described below), We will delete or disable user access to the allegedly infringing material.
            
            If You believe this Site contains any material that infringes Your or another party's rights under intellectual property laws, You must provide notification to the following designated contact: info@acc1952.com. As required by the DMCA, Your notification must: (a) include an electronic or physical signature of the person authorized to act on behalf of the owner of the material alleged to have been infringed; (b) contain a description of the alleged infringing material, including the URL where the material exists, or a copy of the alleged infringed material; (c) provide the address, telephone number, and e-mail address of the notifying party; (d) include a statement by You that You have a good faith belief that the use of the material is not authorized by the owner, its agent, or the law; and (e) include a statement by You, made under penalty of perjury, that the information in the notification is accurate and that You are the owner or owner’s authorized agent.
            If We delete or disable user access to material alleged to be infringing, We will attempt to contact the user who posted the material and give that user 10 days to respond. Any counter notifications submitted by such user will be furnished to the original notifying party, who will be given 10 days to seek judicial relief in accordance with the DMCA before We replace or restore user access to the material.
          `
        },
        {
          subtitle: "4. TERMINATION OF USAGE; NOTIFICATION AND PROCEDURE REGARDING INFRINGEMENTS",
          description: `
            We may block Your access to all or part of this Site, at any time and without notice, for any conduct that We believe, on Our sole discretion, violates this Agreement or applicable law or is harmful to the interests of another user, Us or Our affiliates.
          `
        },
        {
          subtitle: "5. NO WARRANTY",
          description: `
            WE AND OUR SUPPLIERS PROVIDE THIS SITE AND ANY RELATED SERVICES "AS IS" AND WITHOUT ANY WARRANTY OR CONDITION, EXPRESS, IMPLIED OR STATUTORY. Use of this Site is at Your sole risk. We do not guarantee continuous, uninterrupted, error-free or secure access to this Site or its products or services, and operation of this Site may be interfered with by numerous factors outside of Our control. WE AND OUR SUPPLIERS SPECIFICALLY DISCLAIM ALL EXPRESS AND IMPLIED WARRANTIES, INCLUDING WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
          `
        },
        {
          subtitle: "6. DISCLAIMER",
          description: `
            This disclaimer of liability applies to any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of digital records, whether for breach of contract, tortious behavior, negligence, or under any other cause of action. We are not liable for the defamatory, offensive or illegal conduct of other users or third parties. The risk of injury from the foregoing rests entirely with You.
          `
        },
        {
          subtitle: "7. LIMITATION OF LIABILITY",
          description: `
            IN NO EVENT WILL WE OR OUR SUPPLIERS BE LIABLE FOR LOST PROFITS OR ANY SPECIAL, INCIDENTAL, ECONOMIC OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS SITE, THE PRODUCTS OR SERVICES AVAILABLE ON THIS SITE OR THIS AGREEMENT, HOWEVER ARISING, INCLUDING, WITHOUT LIMITATION, NEGLIGENCE. FURTHERMORE, WE WILL NOT BE LIABLE EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR LIABILITY TO You FOR LOSSES, DAMAGES, INJURIES, AND CLAIMS OF EVERY KIND (WHETHER CLAIMED UNDER CONTRACT, NEGLIGENCE, TORT OR OTHER LEGAL THEORY) WILL UNDER NO CIRCUMSTANCES EXCEED THE AMOUNT You PAID TO ACCESS THIS SITE.
          `
        },
        {
          subtitle: "8. INDEMNITY",
          description: `
            You must indemnify and hold Us and Our parent, subsidiaries, affiliates, officers, directors, agents
  
  , and employees harmless from any claim, action, demand, loss, or liability, including reasonable attorneys’ fees, arising out of Your use of this Site, Your violation of this Agreement, or Your violation of any rights of another party.
          `
        },
        {
          subtitle: "9. CHOICE OF LAW AND FORUM",
          description: `
            This Agreement will be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles. You agree that any legal action or proceeding arising under this Agreement or in connection with this Site shall be brought exclusively in the courts located in New York County, New York.
          `
        },
        {
          subtitle: "10. ENTIRE AGREEMENT",
          description: `
            This Agreement constitutes the entire agreement between Us and You with respect to the subject matter hereof, and supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between Us and You with respect to this Site. Any waiver of any provision of this Agreement will be effective only if in writing and signed by Us.
          `
        },
        {
          subtitle: "11. SEVERABILITY",
          description: `
            If any provision of this Agreement is held to be invalid or unenforceable, such provision will be deemed modified to the extent necessary to render it enforceable, and the remaining provisions of this Agreement will remain in full force and effect.
          `
        },
        {
          subtitle: "12. MODIFICATIONS",
          description: `
            We reserve the right to modify this Agreement at any time. Your continued use of this Site following the posting of any changes to this Agreement constitutes Your acceptance of those changes. We encourage You to periodically review this Agreement for any changes.
          `
        }
      ]
    }
  ];


  return (
    <div className="bg-black">
      <Banner title={"Privacy Policy"} imageUrl={img} />
      <Container className={"sm:px-10 lg:px-36 2xl:px-80 font-riviera mt-20"}>
        <AccUpdate
          des="At Achievement Cigar Company, your privacy is a top priority. This
        Privacy Policy outlines how we collect, use, and protect your personal
        information when you interact with our website and services, including
        our selection of cigars, spirits, accessories, and luxury storage
        products."
        />
        <Information data={data} />
        <ContactUs />
      </Container>
    </div>
  );
};

export default page;
