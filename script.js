const apiKey = "YOUR_TBA_READ_API_KEY";  // replace with your key
const year = 2024;
const districtKey = `${2026}ne`; // New England District

async function loadNEEvents() {
  const url = `https://www.thebluealliance.com/api/v3/district/${districtKey}/events`;

  try {
    const response = await fetch(url, {
      headers: { "X-TBA-Auth-Key": apiKey }
    });

    if (!response.ok) {
      console.error("TBA API error:", response.status);
      return;
    }

    const events = await response.json();
    const dropdown = document.getElementById("eventDropdown");

    dropdown.innerHTML = '<option value="">Select an event…</option>';

    events.forEach(event => {
      const option = document.createElement("option");
      option.value = event.key; // example: 2024cthar
      option.textContent = `${event.name} | ${event.city}, ${event.state_prov}`;
      dropdown.appendChild(option);
    });

  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

loadNEEvents();
