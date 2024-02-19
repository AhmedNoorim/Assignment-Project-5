const selectedSeats = []
const validCoupons = ['NEW15', 'COUPLE20']

// get coupon
const couponApply = getElementById("coupon-apply")

function couponChecker() {
    let coupon = getElementById("coupon-input")
    coupon = coupon.value
    coupon = coupon.split(" ").join("").toUpperCase()

    if (validCoupons.includes(coupon)) {
        hideElement("coupon-apply-div")
        unHideElement("discount")

        let discount = coupon.substring(coupon.length - 2)
        discount = parseInt(discount) / 100

        const discountAmount = 550 * selectedSeats.length * discount
        setTextById("discount-amount", discountAmount)

        const grandTotal = 550 * selectedSeats.length - discountAmount
        setTextById("grand-total", grandTotal)

        return true
    }
    else
        return false
}

couponApply.addEventListener('click', function () {

    if (couponChecker()) {
    }
    else {
        alert("Wrong! Give a valid coupon.")
    }
})


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
            const seatID = seat.id
            console.log("Seat Selected:", seatID)
            // console.log(selectedSeats)

            // checking 4 seat selection
            if (selectedSeats.length < 4) {
                if (!selectedSeats.includes(seatID)) {
                    selectedSeats.push(seat.id)
                    setBackGroundColorById(seat.id, '[#1DD100]')

                    const totalSeats = 40
                    setTextById('seat-left', totalSeats - selectedSeats.length)

                    setTextById('seat-count', selectedSeats.length)

                    seatsAdded(seat.id)

                    setTextById("total-price", 550 * selectedSeats.length)
                    setTextById("grand-total", 550 * selectedSeats.length)

                    couponChecker()
                }
            }
            else {
                alert("You have already selected 4 tickets!")
            }
        })
    }
}
seatSelection()

