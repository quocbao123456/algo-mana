import { validPartition } from "./valid-partition"

test('happy case', () => {
    expect(validPartition([4, 4, 4, 5, 6])).toEqual(true)
    expect(validPartition([993335, 993336, 993337, 993338, 993339, 993340, 993341])).toEqual(false)
})
