let visits = [];

exports.createVisit = (req, res) => {
    const { title, description, date } = req.body;
    const newVisit = { id: visits.length + 1, title, description, date };
    visits.push(newVisit);
    console.log('Visit created:', newVisit); // Log the created vim starsit
    console.log('All visits:', visits); // Log all visits
    res.json(newVisit);
};

exports.getVisits = (req, res) => {
    console.log('Retrieving all visits:', visits); // Log all visits
    res.json(visits);
};

exports.getVisitById = (req, res) => {
    const visit = visits.find(v => v.id === parseInt(req.params.id));
    if (!visit) return res.status(404).json({ msg: 'Visit not found' });
    console.log('Visit found:', visit); // Log the found visit
    res.json(visit);
};

exports.updateVisit = (req, res) => {
    const visit = visits.find(v => v.id === parseInt(req.params.id));
    
    if (!visit) return res.status(404).json({ msg: 'Visit not found' });

    const { title, description, date } = req.body;
    if (title) visit.title = title;
    if (description) visit.description = description;
    if (date) visit.date = date;

    res.json(visit);
    console.log('Visit updated:', visit); // Log the updated visit
};

exports.deleteVisit = (req, res) => {
    visits = visits.filter(v => v.id !== parseInt(req.params.id));
    // console.log('Visit removed with id:', visitId); // Log the id of the removed visit
    // console.log('Remaining visits:', visits); // Log remaining visits
    console.log('Visit removed with id:', visitId); // Log the id of the removed visit
    res.json({ msg: 'Visit removed' });
    
    
};
