---
title: Notification email
opener: We report vulnerabilities to prevent issues
intro: |-
  Whenever a vulnerability is found, we open a [case](https://www.divd.nl/dictionary/) and create a fingerprint*. Afterwards, we start scanning to identify vulnerable instances and notify the owners of these systems. This structured approach helps ensure that vulnerabilities are tracked, managed, and resolved systematically.

  A case is a record or file, created to document and manage the process of addressing the specific vulnerability.  A fingerprint is a unique identifier or signature for the vulnerability to help in identifying affected systems.
csirt:
  title: Our researchers search for vulnerabilities
  description: |-
    CSIRT: Computer Security Incident Response Team

    The CSIRT handles the scanning for and disclosing of vulnerabilities, either discovered by DIVD researchers or third parties and warning people for leaked credentials and operates our CVE Numbering Authority (CNA) capability.

    **Only owners of vulnerable instances receive a notification with the host information and mitigation steps.**
  link: https://csirt.divd.nl
stepbystep:
  title: A step-by-step guide on what you should do
  description: If you've received an notification (email) from our CSIRT, check whether the email address contains @divd.nl. This could be csirt@divd.nl, divd-case-number@csirt.divd.nl or a name-of-researcher@divd.nl (as some of our researchers prefer to send notifications from their personal DIVD account).
  link: https://csirt.divd.nl
  steps:
    step1title: Read the e-mail thoroughly
    step1description: The email contains all the information you'll need to take actions on this vulnerability. We always share the possible consequences when the vulnerability is exploited by a threat actor.
    step2title: Check your security policy and forward this email to the right person
    step2description: Some organisations employ a CISO, developer or other IT-team member, please inform the right person in your organisation about the vulnerability. If you don't have a contact who could help you out, please reply on our email and we'll do our best to help you out.
    step3title: Check the status of the case on the CSIRT website
    step3description: We update the casefile whenever there's any news on the vulnerability. This might be when a patch is available or, unfortunately, in some cases when there's no patch available yet we keep you updated on what type of mitigations you can take.
    step4title: Make sure you're responsible disclosure policy is accurate.
    step4description: Please add 'security.txt' to your responsible disclosure policy. You could use securitytxt.org to easily create a security.txt file and ask your administrator to add it in the source of the website.
    step4linklabel: CSIRT Case pages
    step4link: https://csirt.divd.nl/cases
---
