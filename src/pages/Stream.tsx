import MuxPlayer from "@mux/mux-player-react";
import { Container } from "../components/common/Container";
import { Nav } from "../components/common/Nav";
// import { useParams } from "react-router-dom";

export const Stream = () => {
  // const params = useParams();
  // console.log("🚀 ~ Stream ~ paybackId:", params.paybackId);
  return (
    <Container>
      <Nav />

      <MuxPlayer
        accentColor="red"
        streamType="live"
        // playbackId={params.paybackId}
        playbackId={"fda"}
        metadataVideoTitle="Placeholder (optional)"
        metadataViewerUserId="Placeholder (optional)"
        primaryColor="#FFFFFF"
        secondaryColor="#000000"
      />
    </Container>
  );
};
