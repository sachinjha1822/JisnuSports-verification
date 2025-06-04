const members = {
  "JS-2506-0001": {
    name: "Sachin Jha",
    status: "Active",
    photo: "member-1.jpg",
    joinDate: "12-Dec-2024"
  },
  "JS-2506-0002": {
    name: "Ayush chaudhary",
    status: "Active",
    photo: "member-2.jpg",
    joinDate: "01-Dec-2024"
  },
  "JS-2506-0003": {
    name: "Sudhir Kumar Rana",
    status: "Active",
    photo: "member-3.jpg",
    joinDate: "14-Dec-2024"
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
