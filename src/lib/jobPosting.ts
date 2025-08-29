export const toJobPosting = (job:any) => ({
  '@context':'https://schema.org',
  '@type':'JobPosting',
  title: job.title,
  description: job.body || job.description,
  datePosted: job.datePosted,
  validThrough: job.validThrough,
  employmentType: job.employmentType,
  hiringOrganization:{
    '@type':'Organization', name:'NanoFrontier', sameAs:'https://nanofrontier.jp'
  },
  jobLocation:{ '@type':'Place', address:{ '@type':'PostalAddress', addressCountry:'JP' } },
  identifier: job.identifier ? { '@type':'PropertyValue', name:'NanoFrontier', value: job.identifier } : undefined,
  directApply: true
});


