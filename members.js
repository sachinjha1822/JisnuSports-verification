const members = {
  "JS-2506-0001": {
    name: "Sachin Jha",
    status: "Active",
    photo: "member-1.jpg",
    joinDate: "01-Jun-2025"
  },
  "JS-2506-0002": {
    name: "Ayush chaudhary",
    status: "Active",
    photo: "member-2.jpg",
    joinDate: "03-Jun-2025"
  },
  "JS-2506-0003": {
    name: "Anjali Sharma",
    status: "Inactive",
    photo: "https://via.placeholder.com/100",
    joinDate: "05-Jun-2025"
  }
};

function verifyMember() {
  const input = document.getElementById("memberId").value.trim();
  const resultDiv = document.getElementById("result");

  if (members[input]) {
    const { name, status, photo, joinDate } = members[input];
    const statusColor = status === "Active" ? "green" : "red";

    resultDiv.innerHTML = `
      <div class="flex gap-4">
        <img src="${photo}" class="w-24 h-24 rounded-full border shadow" />
        <div>
          <p class="text-lg font-bold">${name}</p>
          <p class="text-sm text-gray-600">Member ID: ${input}</p>
          <p class="text-sm">Joined: ${joinDate}</p>
          <span class="inline-block mt-2 px-3 py-1 rounded-full bg-${statusColor}-100 text-${statusColor}-700 text-sm font-medium">
            ${status} Member
          </span>
        </div>
      </div>
    `;
    resultDiv.classList.remove("hidden");
  } else {
    resultDiv.innerHTML = `<p class="text-red-600 font-semibold">❌ Member ID not found.</p>`;
    resultDiv.classList.remove("hidden");
  }
}
