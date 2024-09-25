let bookings = [];

exports.bookVisit = (req, res) => {
    const { userName, visitId } = req.body;
    const newBooking = { id: bookings.length + 1, userName, visitId };
    bookings.push(newBooking);
    console.log('Booking created:', newBooking); // Log the created booking
    console.log('All bookings:', bookings); // Log all bookings
    res.json(newBooking);
};

exports.getBookings = (req, res) => {
    console.log('Retrieving all bookings:', bookings); // Log all bookings
    res.json(bookings);
};
