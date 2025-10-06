# User Prompt - SOC 2 Parsing Example

*This is the exact prompt the learner submitted (after filling out their baseline context) that generated the 12-week learning lab.*

---

```
Reference my GRC Baseline Context above, then:

Create comprehensive learning experience for automating SOC 2 Type 2 document analysis.

Learning Objective: Learn to parse and extract structured data from unstructured SOC 2 Type 2 PDF reports using Python

Application Context: I need to automate the initial data extraction from vendor SOC 2 reports to reduce my manual review time and populate my vendor tracking spreadsheet automatically. Currently spending 3+ hours per SOC 2 report manually reading, highlighting, and copy-pasting key findings.

Current Starting Point: I'm currently reading SOC 2 PDFs manually in Preview (Mac), highlighting important sections, then copy-pasting into a Google Sheet. I know Python basics (can write simple scripts, understand functions and loops) but have never worked with PDFs programmatically. I've used pandas for CSV files but that's about it.

Time Investment: 3 hours/week for 10-12 weeks (Sunday mornings are my dedicated learning time)

Desired Deliverable: Python script(s) that can:
1. Extract key data points from SOC 2 PDFs:
   - Opinion type (unqualified/qualified/adverse)
   - Report period dates
   - Trust Service Categories covered (Security, Availability, etc.)
   - Number of exceptions/deviations
   - Presence of CUECs (complementary user entity controls)
   - Subservice organizations (if any)

2. Output to CSV format that I can import into Google Sheets

3. Ideally, process multiple PDFs at once (batch processing)

Generate learning lab that:
- Matches my intermediate Python level (explain concepts but don't over-simplify)
- Uses my actual Google Workspace environment (Google Sheets integration eventually)
- Addresses my specific challenge: 500+ vendors, SOC 2 reports vary in format
- Works on Mac (I use MacBook Pro for work)
- Builds progressively (don't jump straight to complex solution)
- Includes troubleshooting (PDFs are messy, I know extraction won't be perfect)
- Provides coaching on how to present this to my manager as proof of value
- Creates reusable framework I can adapt for other document types later

Design for practical skill building that results in:
- Working automation I deploy for real vendor reviews by end of 12 weeks
- Measurable time savings I can demonstrate in my promotion case
- Confidence to tackle other TPRM automation projects
- Documentation good enough to train my junior analysts
- Portfolio piece I can write about publicly (for career development)

Focus on the data extraction and standardization part - that's what takes longest in my manual process. I can handle the risk analysis part once the data is structured.

Specific pain points to address:
- Finding exception details scattered across 80+ pages
- Determining which Trust Service Categories are actually covered (sometimes listed, sometimes you have to infer)
- Identifying CUECs that are buried in dense paragraphs
- Handling different auditor formats (Big 4 firms format differently than regional firms)
- Not missing important details when I'm going through my 10th SOC 2 report of the week
```

---

## Notes on This Prompt

### What Made This Effective

1. **Specificity:** Clear about exactly what data points need to be extracted (not just "analyze SOC 2 reports")

2. **Context:** Explained the actual workflow and pain points ("10th SOC 2 report of the week")

3. **Realistic Baseline:** Honest about technical level ("intermediate Python, never worked with PDFs")

4. **Practical Constraints:** Mentioned Mac environment, Google Sheets integration, batch processing needs

5. **Multiple Goals:** Technical skill + career advancement + team training + portfolio building

6. **Success Criteria:** Defined what "done" looks like (working automation deployed in 12 weeks)

### What the Learner Would Change

Looking back after completing the lab, the learner noted:

> *"I would have been more specific about the time savings target. I said 'reduce review time' but should have said 'from 3 hours to 30-45 minutes' as a concrete goal. I also underestimated how valuable the exception pattern analysis would be—I thought I just wanted extraction, but the Week 9-10 advanced analysis became one of the most useful parts."*

### Variations to Try

If you're adapting this for your situation, consider modifying:

- **Document Type:** ISO 27001 certificates, penetration test reports, cyber insurance policies
- **Data Points:** Customize to what YOU need to track
- **Output Format:** Direct to database, PowerBI integration, Slack notifications
- **Volume:** Adjust batch processing needs based on your vendor count
- **Timeline:** Compress to 6 weeks intensive or expand to 16 weeks for deeper learning

---

## How to Adapt This Prompt

### If You're More Technical:
Remove explanations like "explain concepts" and add:
- "Assume I know Python well, focus on GRC-specific application"
- "Include advanced techniques like NLP for entity extraction"
- "Integrate with APIs from day 1"

### If You're Less Technical:
Add more scaffolding:
- "I've never coded before - start from absolute basics"
- "Provide screenshots and step-by-step installation help"
- "Explain what functions and libraries are"

### If You Have Different Tools:
Replace Google Workspace with your stack:
- "Use Microsoft 365 environment (PowerBI, Excel)"
- "Output to ServiceNow GRC module via API"
- "Integrate with our Archer GRC platform"

### If You Have Different Timeline:
- "2 hours/week for 16 weeks" (more gradual)
- "Full-time intensive: 40 hours over 2 weeks" (bootcamp style)
- "30 minutes daily for 12 weeks" (bite-sized)

---

**Ready to create your own prompt?** Use the [employed template](../../user_prompts/employed.md) and customize for your specific challenge.
