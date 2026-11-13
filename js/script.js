
// =========================
// GROUP MEMBER INFORMATION
// =========================

const members = [
    {
        name: "Diamond B. Lake Jr",
        id: "12103",
        initials: "DL"
    },
    {
        name: "Octavius Ticker",
        id: "12110",
        initials: "OT"
    },
    {
        name: "B. Melvina Saye",
        id: "12124",
        initials: "BS"
    },
    {
        name: "John S. Kollie",
        id: "12156",
        initials: "JK"
    },
    {
        name: "Clemencia P. Domrogh",
        id: "11921",
        initials: "CD"
    },
    {
        name: "Sylvelena K. Kerkula",
        id: "11927",
        initials: "SK"
    },
    {
        name: "Varleah C. Sorie",
        id: "11928",
        initials: "VS"
    },
    {
        name: "Charlene S.E Clark",
        id: "11934",
        initials: "CC"
    },
    {
        name: "Olivia D. Williams",
        id: "11982",
        initials: "OW"
    },
    {
        name: "Remeber Yini",
        id: "12042",
        initials: "RY"
    },
    {
        name: "Patrick K. Togba Jr",
        id: "11866",
        initials: "PT"
    }
];


// =========================
// MEMBER PROFILE MODAL
// =========================

const memberModal = document.getElementById("memberModal");

const modalName = document.getElementById("modalName");
const modalId = document.getElementById("modalId");
const modalInitials = document.getElementById("modalInitials");

const closeMemberModal = document.getElementById("closeMemberModal");


// Open the selected member's profile

document.querySelectorAll(".member-card").forEach(card => {

    card.addEventListener("click", function () {

        const memberIndex = Number(this.dataset.member);
        const member = members[memberIndex];

        if (!member || !memberModal) return;

        modalName.textContent = member.name;
        modalId.textContent = "Student ID: " + member.id;
        modalInitials.textContent = member.initials;

        memberModal.classList.add("show");
        memberModal.setAttribute("aria-hidden", "false");

        closeMemberModal.focus();

    });

});


// Close the popup

function closeModal() {

    if (!memberModal) return;

    memberModal.classList.remove("show");
    memberModal.setAttribute("aria-hidden", "true");

}


// Close using the close button

if (closeMemberModal) {

    closeMemberModal.addEventListener("click", closeModal);

}


// Close when clicking outside the popup

if (memberModal) {

    memberModal.addEventListener("click", function (event) {

        if (event.target === memberModal) {
            closeModal();
        }

    });

}


// Close using the Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

const confirmationModal =
    document.getElementById("confirmationModal");

const successModal =
    document.getElementById("successModal");

const confirmSubmit =
    document.getElementById("confirmSubmit");

const cancelSubmit =
    document.getElementById("cancelSubmit");

const closeSuccess =
    document.getElementById("closeSuccess");


// Open confirmation popup

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        confirmationModal.classList.add("show");
        confirmationModal.setAttribute("aria-hidden", "false");

    });

}


// Confirm submission

if (confirmSubmit) {

    confirmSubmit.addEventListener("click", function() {

        confirmationModal.classList.remove("show");
        confirmationModal.setAttribute("aria-hidden", "true");

        contactForm.reset();

        successModal.classList.add("show");
        successModal.setAttribute("aria-hidden", "false");

    });

}


// Cancel submission

if (cancelSubmit) {

    cancelSubmit.addEventListener("click", function() {

        confirmationModal.classList.remove("show");
        confirmationModal.setAttribute("aria-hidden", "true");

    });

}


// Close success popup

if (closeSuccess) {

    closeSuccess.addEventListener("click", function() {

        successModal.classList.remove("show");
        successModal.setAttribute("aria-hidden", "true");

    });

}


// Close contact popups with Escape

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        if (confirmationModal) {
            confirmationModal.classList.remove("show");
            confirmationModal.setAttribute("aria-hidden", "true");
        }

        if (successModal) {
            successModal.classList.remove("show");
            successModal.setAttribute("aria-hidden", "true");
        }

    }

});
