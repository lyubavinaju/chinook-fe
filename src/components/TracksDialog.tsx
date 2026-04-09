import type { FC } from 'react'
import DialogWrapper from './DialogWrapper'
import Tracks from './Tracks'

type Props = {
  invoice_id?: number
  album_id?: number
  playlist_id?: number
}

const TracksDialog: FC<Props> = ({ invoice_id, album_id, playlist_id }) => {
  return (
    <DialogWrapper
      triggerLabel="Details"
      title="Tracks"
      body={<Tracks invoice_id={invoice_id} album_id={album_id} playlist_id={playlist_id} />}
    />
  )
}

export default TracksDialog
