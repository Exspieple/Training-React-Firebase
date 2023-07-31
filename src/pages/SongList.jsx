import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase";

import { BsInfoCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import { handleDelete, handleEdit, handleNew } from "../handler";
import { Button, Chip, IconButton, Rating, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "MyMusicMix"), (snapshot) => {
      setSongs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const columns = [
    { field: "title", headerName: "Title", width: 250, editable: true },
    {
      field: "componists",
      headerName: "Componists",
      editable: true,
      width: 200,
      /* NOT WORKING FOR SOME REASON: renderCell: (params) => {
        params.row.componists.map((elem) => 
          <Chip key={elem} label={elem} color="warning" />
        );
      }, */
    },
    { field: "duration", headerName: "Duration", width: 100, editable: true },
    { field: "year", headerName: "Year", width: 100, editable: true },
    {
      field: "rating",
      headerName: "Rating",
      width: 150,
      renderCell: (params) => (
        <Rating name="read-only" value={params.row.rating} readOnly />
      ),
    },
  ];

  return (
    <div>
      {/* <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Componists</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Years</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song) => (
              <TableRow key={song.id}>
                <TableCell>
                  <Tooltip title={"ID: " + song.id} arrow placement="right">
                    {song.title}
                  </Tooltip>
                </TableCell>
                <TableCell>{song.componist}</TableCell>
                <TableCell>{song.duration}</TableCell>
                <TableCell>{song.year}</TableCell>
                <TableCell>
                  <Rating name="read-only" value={song.rating} readOnly />
                </TableCell>
                <TableCell>
                  <IconButton
                    sx={{
                      marginInline: 1,
                      padding: 1,
                    }}
                    size="small"
                    onClick={() => handleEdit(song.id, song)}
                  >
                    <FiEdit />
                  </IconButton>
                  <IconButton
                    sx={{
                      marginInline: 1,
                      padding: 1,
                    }}
                    size="small"
                    onClick={() => handleDelete(song.id, song)}
                  >
                    <MdDeleteOutline />
                  </IconButton>
                  <br />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      <DataGrid
        rows={songs}
        columns={columns}
        checkboxSelection
        editMode="row"
        sx={{
          maxWidth: "700ch",
        }}
      />

      <Button variant="outlined" onClick={handleNew} sx={{marginBlock: 1}}>
        Neuen Titel hinzüfügen...
      </Button>
    </div>
  );
}
