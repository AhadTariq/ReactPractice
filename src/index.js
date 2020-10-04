//const sq = (num) => num * num;
//console.log(sq(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
];

//const activeJob = jobs.filter(function(job){return job.isActive;});

const activeJob = jobs.filter((jobs) => jobs.isActive);
console.log(activeJob);
