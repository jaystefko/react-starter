import { notify, getAuthHeaders } from '../../src/utils/handlers'

let largeString = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas elit nulla, et sodales magna pretium sit amet. Nulla facilisi. Nunc id risus rhoncus, rhoncus leo in, hendrerit metus. Curabitur laoreet volutpat dui, vel ullamcorper mi. Maecenas ipsum odio, aliquet vitae turpis eget, tristique lacinia est. In nisl risus, tempus vel mollis quis, tristique et mi. Donec dapibus pulvinar dolor, eget sodales diam eleifend eu. Duis arcu mauris, elementum eu aliquet sed, ullamcorper sit amet neque. Integer ullamcorper aliquet magna eu condimentum. Vivamus at metus aliquam nulla suscipit accumsan. Nunc porta leo nec sem aliquam, non dapibus lorem imperdiet. Cras ornare sit amet sapien non convallis. Fusce ac pulvinar turpis. Duis sodales magna dui, vel ornare dui tempor ut. In hac habitasse platea dictumst.
  Donec hendrerit libero in eros vulputate sodales. Aliquam sed ultricies leo. In congue est turpis, vitae imperdiet magna auctor at. Nam tempor, eros in ullamcorper cursus, nunc augue pretium lectus, vitae interdum ante nisi eget tortor. Phasellus vitae varius neque. In ultrices, arcu eget posuere hendrerit, velit ante fermentum arcu, ut feugiat metus arcu a arcu. Nullam sodales, sem ac efficitur ultricies, erat nulla vestibulum enim, accumsan bibendum enim turpis vitae justo. Cras finibus metus arcu, a mattis elit vehicula dapibus. Aenean in mattis metus, eu bibendum tortor. Ut aliquet varius accumsan. Vivamus eget ligula vel turpis hendrerit semper quis id nisl. Etiam eget enim massa. Aenean finibus libero sed blandit vulputate. Curabitur vitae sapien in mi hendrerit porta.
  Aenean rutrum lacus vel libero convallis pellentesque. Mauris efficitur nec lacus non bibendum. Aliquam a turpis id justo placerat congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id odio nisi. Integer tincidunt commodo tempor. Vestibulum ac lorem nisl. Suspendisse eget vestibulum lacus, at dignissim ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eget justo vitae erat viverra pretium. Donec at nisl risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce quis eros ex. Nam ullamcorper tortor in feugiat faucibus. Suspendisse eget nibh in dui tempus ornare nec vel est.
  Suspendisse ut ante dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ut lobortis tellus, in sagittis felis. Suspendisse potenti. Nulla accumsan accumsan interdum. Quisque lobortis, purus eu consectetur suscipit, turpis tortor hendrerit lorem, a tempor diam dolor pulvinar nunc. Integer faucibus orci vitae nisl commodo, tristique vulputate odio ultrices. Curabitur pretium dui ac purus feugiat accumsan. Curabitur consectetur ultrices sapien et venenatis.
  Nulla tincidunt nibh quis mattis eleifend. Duis bibendum nunc eu sem rutrum venenatis. Curabitur pellentesque hendrerit tempor. Nulla ac malesuada lectus, vitae pellentesque ante. Sed malesuada, erat a volutpat accumsan, orci lacus posuere justo, id convallis arcu nibh auctor dui. In consequat enim pharetra magna suscipit, vitae egestas urna sagittis. Sed iaculis orci vel leo rutrum pharetra. Suspendisse sit amet bibendum magna, nec consequat ante. Suspendisse rutrum mi eros, id blandit sem pulvinar non.
`

test('empty call notify', () => {
  expect(notify()).toBeFalsy()
})

test('not string token notify', () => {
  expect(notify(null)).toBeFalsy()
})

test('too large string notify', () => {
  expect(notify(largeString)).toBeFalsy()
})

test('wrong type token notify', () => {
  expect(notify('token', 'wrong')).toBeFalsy()
})

test('empty context notify', () => {
  expect(notify('token', 'log', null)).toBeFalsy()
})

test('valid notify', () => {
  expect(notify('token')).toBeTruthy()
})

test('empty call getAuthHeaders', () => {
  expect(getAuthHeaders()).toBeNull()
})

test('not string token getAuthHeaders', () => {
  expect(getAuthHeaders(null)).toBeNull()
})

test('too large string getAuthHeaders', () => {
  expect(getAuthHeaders(largeString)).toBeNull()
})

test('valid getAuthHeaders', () => {
  expect(getAuthHeaders('token')).toBe({ headers: { Authorization: 'token' } })
})
