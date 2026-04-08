import React from 'react'
import type { Album } from '../../model/Album'
import useData from '../../hooks/useData'
import apiClient from '../../services/ApiClientImpl'
import { Button, Table } from '@chakra-ui/react'

const AlbumsPage = () => {
  const {data: albums, isLoading} = useData<Album[]>(["albums"], () => apiClient.getAlbums())
  return (
    !isLoading &&
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
              <Button size="sm" variant="outline">Details</Button>
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
