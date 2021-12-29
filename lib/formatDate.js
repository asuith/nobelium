export default function formatDate (date, local) {
  const d = new Date(date)
  // Use date format e.g. `2021/12/30` if zh
  // else `Dec 30, 2021` or other formats set by lang
  const options = local.slice(0, 2).toLowerCase() === 'zh'
    ? { year: 'numeric', month: '2-digit', day: '2-digit' } 
    : { year: 'numeric', month: 'short', day: 'numeric' }
  const res = d.toLocaleDateString(local, options)
  // return local.slice(0, 2).toLowerCase() === 'zh'
  //   ? res.replace('年', ' 年 ').replace('月', ' 月 ').replace('日', ' 日')
  //   : res
  return res
}
