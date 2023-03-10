const MusicList = ({musics}) => {
  return (
    <div>
      This is music list
      {musics.map(item => (
        <div>{item.title}</div>
      ))}
    </div>
  )
}
export default MusicList