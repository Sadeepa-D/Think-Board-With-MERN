import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./NoteDetails.css";
import toast from "react-hot-toast";

export const NoteDetails = () => {
  const [Note, setNote] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    const FetchNote = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/sadeepa/viewnotes/${id}`
        );
        setNote(res.data);
      } catch (error) {
        console.log("fetching error", error);
        toast.error("Faild to get note");
      } finally {
        setLoading(false);
      }
    };
    FetchNote();
  }, [id]);
  if (Loading) return <div>Loading note...</div>;
  // console.log(Note);

  const handledelete = async () => {
    if (!window.confirm("Are You sure Want to delete Your Think")) return;
    try {
      const res = await axios.delete(
        `http://localhost:5000/sadeepa/deletenotes/${id}`
      );
      toast.success("Note deleted Sucess");
      navigate("/");
    } catch (error) {
      console.log("Cannt delete note", error);
      toast.error("Delete Failed");
    }
  };

  const handlesave = async (e) => {
    e.preventDefault();
    if (!Note.title.trim() || !Note.content.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    setSaving(true);
    try {
      await axios.put(`http://localhost:5000/sadeepa/updatenotes/${id}`, Note);
      toast.success("Update Note Sucessfully");
      navigate("/");
    } catch (error) {
      console.log("Note update failed", error);
      toast.error("Note Update Failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <h1 className="updatenote_title">Update Your Think</h1>
      <div className="update_nt_form">
        <form>
          <table>
            <tbody>
              <tr>
                <td>Title:</td>
                <td>
                  <input
                    type="text"
                    value={Note.title}
                    onChange={(e) =>
                      setNote({ ...Note, title: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Content:</td>
                <td>
                  <textarea
                    value={Note.content}
                    onChange={(e) =>
                      setNote({ ...Note, content: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="button_row">
                  <button
                    type="submit"
                    className="update_btn"
                    onClick={handlesave}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="delete_btn"
                    onClick={handledelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};
export default NoteDetails;
