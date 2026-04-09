import { Spinner, Table } from '@chakra-ui/react'
import type { FC } from 'react'
import useData from '../hooks/useData'
import type { Track } from '../model/Track'
import apiClient from '../services/ApiClientImpl'

type Props = {
  invoice_id?: number
  album_id?: number
  playlist_id?: number
}

const Tracks: FC<Props> = ({ invoice_id, album_id, playlist_id }) => {
  const sourceType = invoice_id ? "invoice"
    : album_id ? "album"
      : playlist_id ? "playlist"
        : "none";

  const sourceId: string = "" + (invoice_id ?? album_id ?? playlist_id ?? "")

  const { data: tracks, isLoading } = useData<Track[]>(
    ["tracks", sourceType, sourceId],
    () => {
      if (invoice_id) return apiClient.getTracksByInvoice(invoice_id);
      if (album_id) return apiClient.getTracksByAlbum(album_id);
      if (playlist_id) return apiClient.getTracksByPlaylist(playlist_id);
      return Promise.resolve([])
    }
  )

  return (
    isLoading ? <Spinner /> :
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Track Name</Table.ColumnHeader>
            <Table.ColumnHeader>Genre</Table.ColumnHeader>
            <Table.ColumnHeader>Media Type</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tracks && tracks.map(track => (
            <Table.Row key={track.track_id}>
              <Table.Cell>{track.track_name}</Table.Cell>
              <Table.Cell>{track.genre_name}</Table.Cell>
              <Table.Cell>{track.media_type_name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
  )
}

export default Tracks
