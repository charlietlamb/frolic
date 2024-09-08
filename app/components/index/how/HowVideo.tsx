import MuxPlayer from '@mux/mux-player-react';

export default function HowVideo() {
  return (
    <div className="rounded-base overflow-hidden md:w-[90%] w-full">
      <MuxPlayer
        streamType="on-demand"
        playbackId="Po3XEuvTAF51k7qzB44fZFvhI3fO4Zc00bzH8CTyMPJk"
        metadataVideoTitle="Placeholder (optional)"
        metadataViewerUserId="Placeholder (optional)"
        primaryColor="#FFFFFF"
        secondaryColor="#000000"
        autoPlay
        loop
        muted
      />
    </div>
  );
}
