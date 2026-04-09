import React from 'react'
import type { Album } from '../../model/Album'
import useData from '../../hooks/useData'
import apiClient from '../../services/ApiClientImpl'
import { Spinner, Table } from '@chakra-ui/react'
import TracksDialog from '../TracksDialog'

const AlbumsPage = () => {
  const {data: albums, isLoading} = useData<Album[]>(["albums"], () => apiClient.getAlbums())

  return (
    isLoading ? <Spinner /> :
      <Table.Root>
        <Table.Caption />
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Artist Name</Table.ColumnHeader>
            <Table.ColumnHeader>Details</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {albums && albums.map(album => (
            <Table.Row key={album.album_id}>
              <Table.Cell>{album.album_title}</Table.Cell>
              <Table.Cell>{album.artist_name}</Table.Cell>
              <Table.Cell>
                <TracksDialog album_id={album.album_id} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell />
          </Table.Row>
        </Table.Footer>
      </Table.Root>

  )
}

export default AlbumsPage
