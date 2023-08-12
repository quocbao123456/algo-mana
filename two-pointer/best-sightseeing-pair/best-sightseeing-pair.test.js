import { maxScoreSightseeingPair } from "./best-sightseeing-pair"

test('happy case', () => {
    expect(maxScoreSightseeingPair([8,1,5,2,6])).toEqual(11)
    expect(maxScoreSightseeingPair([1,2])).toEqual(2)
})
