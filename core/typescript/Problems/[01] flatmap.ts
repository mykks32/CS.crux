const artistSongs = [
	{
		"_id": "6a3ac88a2fea695da2eaa1d2",
		"genreIds": [
			"6a3abfa02fea695da2eaa0be"
		]
	},
	{
		"_id": "6a3ac7fb2fea695da2eaa1ac",
		"genreIds": [
			"6a3abfba2fea695da2eaa0c7",
			"6a3abfb32fea695da2eaa0c4"
		]
	},
	{
		"_id": "6a3ac7772fea695da2eaa18b",
		"genreIds": [
			"6a3abfad2fea695da2eaa0c1"
		]
	},
	{
		"_id": "6a3ac6df2fea695da2eaa164",
		"genreIds": [
			"6a3abfad2fea695da2eaa0c1",
			"6a3abfb32fea695da2eaa0c4"
		]
	},
	{
		"_id": "6a3ac63a2fea695da2eaa138",
		"genreIds": [
			"6a3abfa02fea695da2eaa0be",
			"6a3abfc02fea695da2eaa0ca"
		]
	},
	{
		"_id": "6a3ac5892fea695da2eaa10f",
		"genreIds": [
			"6a3abfba2fea695da2eaa0c7",
			"6a3abfad2fea695da2eaa0c1"
		]
	}
]

class Flatmap {
	constructor() {}

	/**
	 * Problem: flatMap — Extract Unique Genre IDs from Artist Songs
	 * Category: Array / Functional
	 * Difficulty: Easy
	 * ------------------
	 *
	 * Given an array of song objects where each song has a `genreIds` array,
	 * returns a deduplicated flat list of all genre IDs across all songs.
	 *
	 * Approach:
	 * - Map each song to its `genreIds` array
	 * - Flatten one level deep using `.flat(1)`
	 * - Convert each ID to string
	 * - Wrap in a Set to eliminate duplicates, then spread into an array
	 *
	 * @returns {string[]} Deduplicated array of genre ID strings
	 *
	 * @example
	 * // Given artistSongs with mixed genreIds:
	 * obj.impl()
	 * // → ["6a3abfa02fea695da2eaa0be", "6a3abfba2fea695da2eaa0c7", ...]
	 *
	 * @timecomplexity O(n * m) — n songs, m genreIds per song
	 * @spacecomplexity O(n * m) — storing all genre IDs before deduplication
	 */
	public impl(): string[] {
		// @ts-ignore
		return [
			// @ts-ignore
			...new Set(
				artistSongs.map(
					( s ) => s.genreIds ?? []
					// @ts-ignore
				).flat(1).map(( g ) => g.toString())
			)
		]
	}
}

/**
 * Self-inducing Test Block
 */
( () => {
	// Create Instance
	const obj = new Flatmap()

	// Test Block using Object
	console.log(obj.impl());
} )()