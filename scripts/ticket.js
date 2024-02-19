const totalSeats = 40
const selectedSeats = []
const validCoupons = ['NEW15', 'COUPLE20']

// get coupon
const couponApply = getElementById("coupon-apply")

function couponChecker() {
    let coupon = getElementById("coupon-input")
    coupon = coupon.value
    coupon = coupon.split(" ").join("").toUpperCase()

    if (validCoupons.includes(coupon)) {
        hideElementById("coupon-apply-div")
        unHideElementById("discount")

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
    if (!couponChecker())
        alert("Wrong! Give a valid coupon.")
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

// main - start

// handling seat selection
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



// handling next press
const next = getElementById("next")
next.addEventListener('click', function () {
    // handling information form
    const passengerName = getElementById("passenger-name").value
    const phoneNumber = getElementById("phone-number").value
    const emailId = getElementById("email-id").value

    if (selectedSeats.length > 0 && phoneNumber) {
        hideElementById("navbar")
        hideElementById("ticketing")
        hideElementById("footer")
        unHideElementById("confirmation")
    }
    else {
        alert("Please Select Atleast One Seat.\nEnter Your Phone Number.")
    }
})

// handling confirmation continue
const confirmationContinue = getElementById("confirmation-continue")
confirmationContinue.addEventListener("click", function () {
    unHideElementById("navbar")
    unHideElementById("ticketing")
    unHideElementById("footer")
    hideElementById("confirmation")

    for (const seat of selectedSeats) {
        removeBackGroundColorById(seat, '[#1DD100]')
    }
    selectedSeats.splice(0)

    setTextById('seat-left', totalSeats)
    setTextById('seat-count', 0)

    const selectedSeatList = getElementById('selected-seat-list')
    selectedSeatList.innerHTML = ""

    unHideElementById("coupon-apply-div")
    hideElementById("discount")
    getElementById("coupon-input").value = ""

    getElementById("passenger-name").value = ""
    getElementById("phone-number").value = ""
    getElementById("email-id").value = ""

    setTextById("total-price", 0)
    setTextById("grand-total", 0)
})

// main - end