---
title: Dictionary
intro: |-
  Working for DIVD, we aim to make the digital world safer by reporting vulnerabilities we find in digital systems to the people who can mitigate them.

  But what are exactly are (zero-day) vulnerabilities, and why is it so important to find them as soon as possible? Find these (and other) frequently used cyber security definitions on this page.
---
**Availability**
At DIVD, we adhere to the ‘Principle of Proportionality’ and the ‘Principle of Subsidiarity’, as described in our [Code of Conduct](https://www.divd.nl/what-we-do/code-of-conduct/). This means that our research should increase and not decrease the integrity and availability of any and all online systems. If several means are available to meet the need, we opt for the one which has the least impact on the availability of the systems and services.

**Case**
When DIVD talks about a “case” we refer to a record or file created to document and manage the process of addressing a specific vulnerability. It typically includes details such as:

- Description of the Vulnerability: Information about the nature and specifics of the vulnerability.
- Fingerprint Creation: A unique identifier or signature for the vulnerability to help in identifying affected systems.
- Scanning and Identification: The process of scanning systems to find instances that are vulnerable.
- Notification: Informing the owners of the vulnerable systems about the issue so they can take corrective action.
- This structured approach helps ensure that vulnerabilities are tracked, managed, and resolved systematically.

**Confidentiality**
At DIVD, we work with sensitive data every day. Think about lists of IP addresses, types of vulnerabilities found, contact information, and metadata (e.g. timestamps, scripts, researchers working on the data). [The members of DIVD](https://www.divd.nl/who-we-are/team/) take all precautions necessary to protect the confidentiality of this data.

**(Ethical) Hacker / White Hat Hacker**
DIVD members belong to the “white hat” hackers. A white hat hacker is someone who breaks into a computer system with positive intentions, without disrupting any services or processes. The motivation of a white hat hacker is to detect security vulnerabilities, without misusing or exploiting them. A white hat hacker is sometimes also referred to as an ethical hacker. Our members are skilled professionals that must always operate within legal boundaries. Please read our [Code of Conduct](https://www.divd.nl/what-we-do/code-of-conduct/) for more information. *The term ‘white hat’ comes from cowboy movies in which the hero always wore a white hat.*

**Exploit**\
An exploit is a malicious application, piece of code or script that can be used to take advantage of a system's vulnerability. At DIVD, we don’t use or run intrusive exploits to verify the existence of a vulnerability in a system. Destructive commands like “$ rm -rf /” or testing for denial of service are not permitted in any scenario. If several means are available to meet the need, we opt for the one which has the least impact on the availability of the systems and services.

**Responsible disclosure**
In cybersecurity, responsible disclosure refers to the procedure where a security analyst, ethical hacker, or ethical hacker organisation such as DIVD notifies an organisation about a detected vulnerability in its systems or software. Notifying is done in such a way that the organisation has the opportunity to mitigate the weakness before it becomes public knowledge and possibly misused by hackers with malicious intentions. By privately notifying organisations, they can address the vulnerabilities before they are exploited by malicious hackers, thereby improving the security of their systems.

Responsible disclosure helps protect users, maintains trust between (DIVD) researchers and organisations, and contributes to the ongoing improvement of cybersecurity practices.

**Security.txt**
Security.txt is a proposed standard for websites to provide a clear and consistent way for security researchers to report security vulnerabilities. It involves placing a simple text file named security.txt in the well-known location /.well-known/ directory of a website (e.g., https://example.com/.well-known/security.txt). This file contains contact information and other details that guide researchers on how to responsibly disclose security issues to the organization. Wanna make DIVD's work easier? Put our [security.txt](https://securitytxt.org/) in the code of your website and our IP 194.5.73.0-255 on your allow list.

**Types of vulnerabilities**
There are different types of vulnerabilities. Since DIVD scans IP addresses over the public internet, we mainly focus on web-based vulnerabilities. A good example of a database filled with web-based vulnerabilities is The [OWASP Top 10](https://owasp.org/www-project-top-ten/).

**Vulnerability versus exploit**
A vulnerability is an issue or weakness in a system or application, whereas an exploit is an active component used to carry out an attack. The purpose of an exploit is to ‘exploit’ a vulnerability. A vulnerability itself does not cause harm by itself but creates an opportunity for an attacker to exploit it.