self.onmessage = async (e) => {
  const file = e.data
  console.log('e')
  console.log(e)

  // 分片读取避免大文件内存溢出
  let totalSize = 0
  const chunkSize = 1024 * 1024// 1MB分片

  // for (let i = 0; i < file.size; i += chunkSize) {
  //   // console.log('i', i, totalSize)
  //   const chunk = file.slice(i, i + chunkSize)
  //   const buffer = await chunk.arrayBuffer()
  //   totalSize += buffer.byteLength
  // }
  // postMessage({ size: totalSize })

  const readChunk = () => {
    if (totalSize >= file.size) {
      return postMessage({ size: totalSize })
    }

    const slice = file.slice(totalSize, totalSize + chunkSize)
    const reader = new FileReader()

    reader.onload = (e) => {
      console.log('e', e)
      console.log(totalSize)
      // processChunk(e.target.result) // 处理分片数据
      totalSize += chunkSize
      readChunk()
    }

    reader.readAsArrayBuffer(slice)
  }
  readChunk()
}