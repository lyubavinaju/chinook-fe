import React from 'react'
import useData from '../../hooks/useData'
import { type Playlist } from '../../model/Playlist'
import apiClient from '../../services/ApiClientImpl'
import { Button, Table } from '@chakra-ui/react'

const PlaylistsPage = () => {
  const {data: playlists, isLoading} = useData<Playlist[]>(["playlists"], () => apiClient.getPlaylists());
  return (
       !isLoading &&
       <Table.Root>
          <Table.Caption />
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Id</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Details</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {playlists && playlists.map(playlist => (
              <Table.Row key={playlist.playlist_id}>
                <Table.Cell>{playlist.playlist_id}</Table.Cell>
                <Table.Cell>{playlist.name}</Table.Cell>
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

export default PlaylistsPage
