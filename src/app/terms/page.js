import Banner from "@/components/Banner/Banner";
import img from "@/assets/img/footerPage/terms.jpg";
import Container from "@/components/shared/container/Container";
// import ContactUs from "@/components/shared/FooterPages/contactUs/ContactUs";
import TermInfo from "@/components/shared/FooterPages/Information/TermInfo";

const page = () => {
  const data = [
    {
      subtitle: "YOUR USAGE OF SITE",
      sections: [
        {
          description: `You may use this Site for lawful purposes
only, and You are responsible for Your use
of, communications with, and postings on
this Site. You may not post on, provide
access to, make available, or transmit
through this Site any unlawful, infringing,
threatening, harassing, abusive, libelous,
defamatory, vulgar, obscene, profane,
indecent, offensive, hateful, pornographic
or otherwise objectionable material of any
kind. 

Similarly, posting any of the following is
prohibited: material that`,
        },
        {
          description:
            "(a) encourages or solicits criminal conduct or conduct that would give rise to civil liability;",
        },
        {
          description:
            "(b) infringes others' intellectual property or other rights;",
        },
        {
          description:
            "(c) discloses private or personal matters concerning any person;",
        },
        {
          description:
            "(d) concerns products or items outside the scope of the Site;",
        },
        {
          description:
            "(e) violates laws relating to export control, consumer protection, unfair competition, anti-discrimination, or false advertising;",
        },
        {
          description:
            "(f) violates any other applicable local, state, national, foreign, or international law.",
        },
        {
          description: `You may not use or allow others to use this
Site in any manner that interferes with Site
operation or with another user's use or
enjoyment of this Site. You may not post or
transmit on this Site any file or code that
contains viruses, worms, "Trojan horses,"
malware, spyware, or any other
contaminating, destructive or invasive
features.
You may not post or transmit on this Site
any charity requests, petitions for
signatures, chain letters, letters relating to
pyramid schemes or similar documents.
You may not post, provide access to, make
available or transmit on this Site any
advertising, promotional materials or any
other solicitation of other users of this Site
for goods or services except as expressly
authorized by Us.  

You may not access this Site from any
territory where its use or contents is illegal.
You may not access this Site by any
means except through the interface and
Personal ID provided by Us. You may not
link from a page on another site to any
page on this Site except the home page.
Any robots, spiders, crawlers or other
automated software that You use to access
this Site must comply with the Standard for
Robot Exclusion and must use and comply
with this Site's robots.txt files.
You may not reproduce, distribute or
transmit any copyrighted materials
(whether registered or not) on this Site. All
rights not expressly granted in this
Agreement are reserved.`,
        },
      ],
    },
    {
      subtitle: "ADULT AUDIENCE",
      sections: [
        {
          description: `This Site is intended only for use by adults.
Access to this Site is limited to persons of
legal age. Access is not authorized for
users under 21 years of age.
We believe that youth should not smoke.
We take no actions to encourage youth
smoking, and supports programs designed
to discourage and reduce youth smoking.
We do not engage in any advertising,
promotion, or marketing intended to be
aimed at minors. In addition, Our policies
are designed to limit Our business
communications to adults only. We take
these issues and responsibilities very
seriously.`,
        },
      ],
    },
    {
      subtitle: "USER SUBMISSIONS",
      sections: [
        {
          description: `We are not responsible for monitoring,
screening, policing or editing the
information or materials posted on,
submitted to, accessed or transmitted
through this Site. We do not and cannot
monitor all information or materials posted
on, submitted to or transmitted through this
Site. We do, however, reserve the right to
delete, block or remove any information or
materials that We, in Our sole discretion,
deem unlawful, infringing, defamatory,
libelous, abusive, threatening, obscene,
offensive, fraudulent, deceptive,
inappropriate or otherwise unacceptable to
Us. If We are notified of any such
information or materials on this Site, We will
determine, in Our sole discretion, whether
to remove such content from the Site or repost such content to this Site, and to
restrict Your access to the Site.
Although We appreciate people's interest in
its business, it is Our policy to decline
consideration of unsolicited ideas and
suggestions offered or submitted by the
general public. We rely on Our research
and marketing staffs to generate and
implement new concepts. This is necessary
to avoid misunderstandings over the origin
of particular ideas. We are constantly
generating new ideas, many of which We
may not use until years after they are first
conceived. Accordingly, We do not accept
unsolicited ideas for consideration, and We
ask that You not submit ideas for products,
advertising, etc.
You may not upload, post or otherwise
make available on this Site any material
protected by copyright, trademark, trade
secret or other proprietary right without the
express permission of the owner of such
copyright, trademark, trade secret or other
proprietary right, and the burden of
determining that you have such permission
rests with You.
You will have no recourse against Us for
any alleged or actual infringement or
misappropriation of any proprietary or other
right in Your submissions, postings or
communications to Us.
It is Our policy to respond promptly to
claims of intellectual property infringement
and other violations of law. We will
investigate claims of alleged infringement
and take appropriate actions under the
Digital Millennium Copyright Act ("DMCA").
Upon receiving notification that complies or
substantially complies with the DMCA (as
described below), We will delete or disable
user access to the allegedly infringing
material.  

If You believe this Site contains any
material that infringes Your or another
party's rights under intellectual property
laws, You must provide notification to the
following designated
contact: info@acc1952.com. As required
by the DMCA, Your notification must: (a)
include an electronic or physical signature
of the person authorized to act on behalf of
the owner of the material alleged to have
been infringed; (b) contain a description of
the alleged infringing material, including the
URL where the material exists, or a copy of
the alleged infringed material; (c) provide
the address, telephone number, and e-mail
address of the notifying party; (d) include a
statement by You that You have a good
faith belief that the use of the material is
not authorized by the owner, its agent, or
the law; and (e) include a statement by You,
made under penalty of perjury, that the
information in the notification is accurate
and that You are the owner or owner’s
authorized agent.
If We delete or disable user access to
material alleged to be infringing, We will
attempt to contact the user who posted the
material and give that user 10 days to
respond. Any counter notifications
submitted by such user will be furnished to
the original notifying party, who will be
given 10 days to seek judicial relief in
accordance with the DMCA before We
replace or restore user access to the
material.`,
        },
      ],
    },
    {
      subtitle: `TERMINATION OF USAGE;
NOTIFICATION AND PROCEDURE
REGARDING INFRINGEMENTS`,
      sections: [
        {
          description: `We may block Your access to all or part of
this Site, at any time and without notice, for
any conduct that We believe, on Our sole
discretion, violates this Agreement or
applicable law or is harmful to the interests
of another user, Us or Our affiliates.`,
        },
      ],
    },
    {
      subtitle: `NO WARRANTY`,
      sections: [
        {
          description: `WE AND OUR SUPPLIERS PROVIDE THIS
SITE AND ANY RELATED SERVICES "AS
IS" AND WITHOUT ANY WARRANTY OR
CONDITION, EXPRESS, IMPLIED OR
STATUTORY. Use of this Site is at Your sole
risk. We do not guarantee continuous,
uninterrupted, error-free or secure access
to this Site or its products or services, and
operation of this Site may be interfered with
by numerous factors outside of Our control.
WE AND OUR SUPPLIERS SPECIFICALLY
DISCLAIM ALL EXPRESS AND IMPLIED
WARRANTIES, INCLUDING WARRANTIES
OF TITLE, MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND
NON-INFRINGEMENT.`,
        },
      ],
    },
    {
      subtitle: `DISCLAIMER`,
      sections: [
        {
          description: `This disclaimer of liability applies to any
damages or injury caused by any failure of
performance, error, omission, interruption,
deletion, defect, delay in operation or
transmission, computer virus,
communication line failure, theft or
destruction or unauthorized access to,
alteration of, or use of digital records,
whether for breach of contract, tortious
behavior, negligence, or under any other
cause of action. We are not liable for the
defamatory, offensive or illegal conduct of
other users or third parties. The risk of
injury from the foregoing rests entirely with
You.
`,
        },
      ],
    },
    {
      subtitle: `LIMITATION OF LIABILITY`,
      sections: [
        {
          description: `IN NO EVENT WILL WE OR OUR
SUPPLIERS BE LIABLE FOR LOST
PROFITS OR ANY SPECIAL, INCIDENTAL,
ECONOMIC OR CONSEQUENTIAL
DAMAGES ARISING OUT OF OR IN
CONNECTION WITH THIS SITE, THE
PRODUCTS OR SERVICES AVAILABLE ON
THIS SITE OR THIS AGREEMENT,
HOWEVER ARISING, INCLUDING,
WITHOUT LIMITATION, NEGLIGENCE.
FURTHERMORE, WE WILL NOT BE
LIABLE EVEN IF WE HAVE BEEN ADVISED
OF THE POSSIBILITY OF SUCH
DAMAGES. OUR LIABILITY TO You FOR
LOSSES, DAMAGES, INJURIES, AND
CLAIMS OF EVERY KIND (WHETHER
CLAIMED UNDER CONTRACT,
NEGLIGENCE, TORT OR OTHER LEGAL
THEORY) WILL UNDER NO
CIRCUMSTANCES EXCEED THE AMOUNT
You PAID TO ACCESS THIS SITE.`,
        },
      ],
    },
    {
      subtitle: `INDEMNITY`,
      sections: [
        {
          description: `You must indemnify and hold Us and Our
parent, subsidiaries, affiliates, officers,
directors, agents, and employees, harmless
from all claims and demands, including
reasonable attorneys' fees, made by any
third party due to or arising out of Your use
of the Site, breach of this Agreement or
violation of any applicable law or the rights
of a third party.`,
        },
      ],
    },
    {
      subtitle: `LEGAL COMPLIANCE`,
      sections: [
        {
          description: `You must comply with all applicable laws,
statutes, ordinances and regulations
regarding Your use of this Site and Your
purchase of products from this Site (when
applicable).`,
        },
      ],
    },
    {
      subtitle: `THIRD PARTY SITES/HYPERLINKS`,
      sections: [
        {
          description: `Hyperlinking to this Site from any other site
is expressly prohibited without Our written
permission. This Site may, however
produce automated search results or
otherwise link You to other sites on the
Internet. The inclusion of such a link does
not imply Our endorsement of the site or
any association with the site’s operators.
Hyperlinked sites may contain information
or material that some people find
inappropriate, offensive or otherwise
objectionable. These other sites are not
under Our control, and We are not
responsible for the accuracy, intellectual
property compliance, legality, decency or
any other aspect of the content of such
sites. Furthermore, any opinions, advice,
statements, products, services, offers, or
other information or content expressed at
such sites are those of the respective
owner(s), author(s) or distributor(s) and not
Ours. It is Your responsibility to evaluate
the accuracy, completeness or usefulness
of any information, opinion, advice or other
content available through third party sites.
You should seek the advice of legal or
other professionals, as appropriate,
regarding the evaluation of any specific
information, opinion, advice or other
content.
`,
        },
      ],
    },
    {
      subtitle: `TRADEMARKS`,
      sections: [
        {
          description: `All brands or marks appearing on this Site
are the trademarks of ACC or Our affiliates
and all rights are reserved. All other
trademarks appearing on this Site or
accessed via this Site are the property of
their respective owners, who are neither
sponsors of nor affiliated with Us,
Macanudo, or this Site.`,
        },
      ],
    },
    {
      subtitle: `DTSA NOTICE`,
      sections: [
        {
          description: `Pursuant to 18 USC § 1833(b), an
individual may not be held criminally or
civilly liable under any federal or state trade
secret law for disclosure of a trade secret:
(i) made in confidence to a government
official, either directly or indirectly, or to an
attorney, solely for the purpose of reporting
or investigating a suspected violation of
law; and/or (ii) in a complaint or other
document filed in a lawsuit or other
proceeding, if such filing is made under
seal. Additionally, an individual suing an
employer for retaliation based on the
reporting of a suspected violation of law
may disclose a trade secret to his or her
attorney and use the trade secret
information in the court proceeding, so
long as any document containing the trade
secret is filed under seal and the individual
does not disclose the trade secret except
pursuant to court order.`,
        },
      ],
    },
    {
      subtitle: `MISCELLANEOUS`,
      sections: [
        {
          description: `No agency, partnership, joint venture,
employee-employer or franchise-franchisee
relationship is intended or created by this
Agreement or Your use of the Site. The
information, software, products, offers,
data and services published on this Site
may contain inaccuracies or typographical
errors, which We may correct without
notice. Furthermore, We have the right to
change or modify this Agreement at any
time. Such changes, modifications,
additions or deletions will be effective
immediately when We issue the notice,
which We may give by posting on this Site,
electronic or regular mail or by any other
means. Any use by You after such notice
will constitute Your acceptance or the
changes, modifications, or additions.
This Agreement will be governed in all
respects by the laws of the State of
Nevada of the United States of America. All
disputes concerning this Site and this
Agreement must be brought either in the
state courts of Washoe County, Nevada,
United States or in the federal court in the
same County. You voluntarily submit to
and consent to the exclusive jurisdiction
and venue of such courts. Furthermore,
use of this Site is unauthorized in any
jurisdiction that does not give effect to all
provisions of this Agreement. If any
provision of this Agreement is held to be
invalid or unenforceable, such provision will
be deleted and the remaining provisions
will be enforced. Headings are for reference
purposes only and in no way define, limit,
construe or describe the scope or extent of
such section. Our failure to act with
respect to a breach by You or others does
not waive Our right to act with respect to
subsequent or similar breaches. This
Agreement sets forth the entire
understanding and agreement between You
and Us with respect to Your use of the Site.
A printed version of this Agreement, and
any notice given in electronic form will be
admissible in judicial or administrative
proceedings based upon or relating to this
Agreement to the same extent and subject
to the same conditions as other business
documents and records generated and
maintained in printed form.`,
        },
      ],
    },
    {
      subtitle: ``,
      sections: [
        {
          description: ``,
        },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <Banner title={"Terms & Conditions"} imageUrl={img} />
      <Container className={"sm:px-10 lg:px-36 2xl:px-80 font-riviera mt-20"}>
        <h3 className="text-white font-riviera leading-[22px] font-medium pb-8">
          {`The following user agreement ("Agreement") sets forth the terms upon
          which Achievement Cigar Company Inc. (“ACC”, “Us”, “Our” or “We”)
          offers you ("You" or "Your") access to Our website ("Site").`}
        </h3>
        <p className="text-white font-riviera opacity-80 pb-20 text-justify">
          Your use of this Site constitutes Your acceptance and agreement of the
          following terms:
        </p>
        <TermInfo data={data} />
        {/* <ContactUs /> */}
      </Container>
    </div>
  );
};

export default page;
