# OSINT Recon Lab: Passive Recon - Social Media Investigation
https://thm-task2.netlify.app/

## Overview

Welcome to the **OSINT Recon Lab**! In this task, we will focus on performing **Passive Reconnaissance** with an emphasis on **Social Media Investigation**. Passive recon allows you to gather publicly available information about a target without them knowing. The main goal is to find valuable insights from public sources such as social media profiles, posts, metadata from images, geolocation, and other public content.

This task will guide you through the process of identifying and analyzing social media profiles and metadata to uncover key information about a target.

## Table of Contents

- [Overview](#overview)
- [Task Objectives](#task-objectives)
- [Tools and Resources](#tools-and-resources)
- [Task Steps](#task-steps)
- [Reporting](#reporting)

## Task Objectives

By the end of this task, you will be able to:

1. **Identify social media accounts** of a target using their name, email, or other identifiers.
2. **Scrape publicly available data** from social media profiles, including posts, bio info, and connections.
3. **Extract metadata** from media files (images, videos) shared by the target to uncover hidden information like geolocation.
4. **Analyze social media data** to identify patterns, behaviors, and key findings.
5. **Generate a structured report** summarizing all findings in a professional format.

## Tools and Resources

Here are some essential tools and resources that can assist you in completing this task:

### Tools:
- **Google Search**: To search for the target's social media profiles or mentions.
- **Sherlock**: A tool for searching for a username across multiple platforms.
- **ExifTool**: To extract metadata from images and videos, including geolocation information.
- **Pipl**: An online people search engine for discovering social media profiles linked to an email or phone number.
- **Social Searcher**: A tool for searching social media platforms based on usernames or keywords.
- **OSINT Framework**: A collection of online tools for OSINT investigations.

### Resources:
- [Sherlock GitHub Repository](https://github.com/sherlock-project/sherlock)
- [ExifTool Documentation](https://exiftool.org/)
- [Pipl Search](https://pipl.com/)
- [Social Searcher](https://www.social-searcher.com/social-search/)
- [OSINT Framework](https://osintframework.com/)

## Task Steps

### 1. **Identify the Target**

Start by gathering any available information about the target. This could be their:
- Full name
- Email address
- Phone number
- Username

You can obtain this information from public records, past communications, or even third-party services.

### 2. **Search for Social Media Accounts**

Once you have the target's basic information, you need to find any public social media profiles. Use the following techniques:
- **Google Search**: Use the target's name, username, or email address to search for social media accounts.
- **Sherlock Tool**: Use Sherlock to search for the target's username across multiple social media platforms.
- **Pipl**: Search for the target’s name or email on Pipl to find associated profiles.

### 3. **Analyze Publicly Available Data**

Once you've identified relevant social media profiles, start analyzing the data. Key areas to look at:
- **Profile Information**: Bio, occupation, location, and other publicly available details.
- **Posts**: Review public posts for information on the target's activities, locations, interests, and behaviors.
- **Connections**: Look at friends, followers, or connections that may reveal more about the target or their network.

### 4. **Extract Metadata from Media Files**

Social media platforms often allow users to share photos and videos. You can extract metadata from these files to gather hidden information:
- **Use ExifTool**: Extract metadata like geolocation, camera details, timestamps, etc.
- **Look for Geolocation**: GPS data embedded in photos or videos could give you precise information about where the target has been.

### 5. **Analyze and Document Findings**

Once you’ve gathered enough data, analyze it to look for patterns or key findings. Some examples of things to look for:
- **Location Data**: Mentions of places or geotagging data from photos.
- **Frequent Contacts**: Friends, followers, or connections that could provide insight into the target’s personal or professional network.
- **Behavioral Patterns**: Travel, hobbies, interests, and other personal details mentioned in posts.

### 6. **Generate a Report**

Finally, document your findings in a structured format. Your report should include:
- **Profile Name**: Name of the target.
- **Social Media Accounts Found**: List the platforms the target is active on.
- **Key Findings**: Highlight key insights, such as locations, activities, connections, and geolocation data.

## Reporting

After completing the passive reconnaissance, you should create a report with the following structure:

- **Profile Name**: The name of the target.
- **Social Media Accounts Found**: A list of platforms on which the target is active (e.g., Facebook, LinkedIn, Twitter).
- **Key Findings**:
  - **Public Posts**: Mentions of places, activities, or people of interest.
  - **Friends/Followers**: Connections to notable individuals, companies, or organizations.
  - **Geolocation Data**: GPS data from photos or posts showing specific locations.
  - **Other Insights**: Any additional valuable data gathered during the investigation.

<!--### Example Report Format

```markdown
**Profile Name**: John Doe

**Social Media Accounts Found**:
- Facebook
- LinkedIn
- Instagram

**Key Findings**:
- **Public Posts**: Mentions of a trip to New York and London, along with vacation photos.
- **Friends/Followers**: Linked to XYZ company, several high-profile business professionals.
- **Location**: Frequent mentions of California, New York.
- **Geolocation Data**: GPS data from an Instagram photo showing New York City.-->
