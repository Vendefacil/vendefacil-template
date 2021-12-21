export const useCustomInput = () => {
  return (target: string) => {
    return `<%= ${target} %>`
  }
}
