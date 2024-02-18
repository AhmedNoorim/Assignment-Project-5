const selectedSeats = []

// add seating
function seatsAdded(seat) {
    const parent = getElementById('selected-seat-list')

    const childDiv1 = document.createElement('div')
    childDiv1.classList.add('col-span-3', 'mt-2', seat)
    childDiv1.textContent = seat

    const childDiv2 = document.createElement('div')
    childDiv2.classList.add('col-span-3', 'mt-2', seat)
    childDiv2.textContent = 'Economy'

    const childDiv3 = document.createElement('div')
    childDiv3.classList.add('col-span-3', 'mt-2', 'text-right', seat)
    childDiv3.textContent = '550'

    parent.appendChild(childDiv1)
    parent.appendChild(childDiv2)
    parent.appendChild(childDiv3)
}

// main
// selecting seat
function seatSelection() {
    const seats = document.getElementsByClassName("seat")
    for (const seat of seats) {
        seat.addEventListener('click', function () {
            console.log("Seat Selected:", seat.id)
            // console.log(selectedSeats)

            // checking 4 seat selection
            if (selectedSeats.length < 4) {
                selectedSeats.push(seat.id)
                setBackGroundColorById(seat.id, '[#1DD100]')

                const totalSeats = 40
                setTextById('seat-left', totalSeats - selectedSeats.length)

                setTextById('seat-count', selectedSeats.length)

                seatsAdded(seat.id)

            }
            else {
                alert("You have already selected 4 tickets!")
            }
        })
    }
}
seatSelection()

