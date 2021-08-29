// Setup
var recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};

function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    } else if (prop === "tracks") {
        records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
        records[id][prop].push(value);
    } else {
        records[id][prop] = value;
    }
    return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
// First checks if value is a blank string. If so, then the key (prop) is
// removed from the object.
// If that first check doesn’t pass, it next checks if prop is equal to tracks.
// The tracks array is initialized if it does not exist, and then value is pushed
// into the tracks array. (This step uses shortcircuit evaluation)
// If both these checks fail (meaning value is not an empty string and prop is not tracks),
// then either a new key (prop) and value (value) are added to the object, or an existing
// key is updated if the prop already exists.
