## Overview

The [NMDC](https://microbiomedata.org), initiated in 2019 by the Department of Energy (DOE) Biological and Environmental Research (BER) program, is a large-scale effort to advance, standardize, and publicize microbiome research. The project converts fragmented multi-omics data into findable, accessible, interoperable, and reusable scientific assets. Starting in 2025, I took over as the primary Software Engineer and UX Designer for the NMDC Data Portal. The Data Portal is the front door for accessing and discovering high-quality microbiome data from samples collected around the world.

## Key Contributions

### Full Text Search

![Search for rhizosphere in the NMDC Data Portal](/images/projects/nmdc/nmdc-full-text-search.png)

Full text search enables users to search for NMDC studies and samples using free text. This significantly improves the findability and discoverability of data in the NMDC, and quickly became the most-used filter on the site. The feature utilizes the Full Text Search capability that is built into PostgreSQL to maintain speed and simplicity. It also has custom functionality that triages searches that look like NMDC identifiers into target SQL queries so that users can find studies and samples based on associated provenance identifiers.

### Bulk Download

![Bulk download menu in the NMDC Data Portal](/images/projects/nmdc/nmdc-bulk-download.png)

From 2025-2026 I helped implement major improvements to the bulk download capability in the Data Portal. This included improving the overall usability of the downloaded data packages themselves as well as adding the ability to download additional metadata based on your search. These changes have helped make the downloaded data easier to utilize by both human users as well as AI agents looking at the data.

### UX/UI

![Search for rhizosphere in the NMDC Data Portal](/images/projects/nmdc/nmdc-sample-page.png)

Over the course of 2025 and 2026 I made many other improvements to the UX and UI of the Data Portal. This included a new layout that elevated the result sets and reduced congnitive load, metadata quality filters and badges, and a new layout in the sample page to improve the readability of metadata.
