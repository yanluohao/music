import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    return new Promise((resolve, reject) => {
        // jsonp库，回调一个err和data
        originJsonp(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

export function param(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += '&' + k + '=' + encodeURIComponent(value)
    }
    // 删除第一个&
    return url ? url.substring(1) : ''
}
