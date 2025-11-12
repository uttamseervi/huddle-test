import { useRemoteVideo, useRemoteAudio, useRemoteScreenShare } from '@huddle01/react/hooks';
import { Audio, Video } from '@huddle01/react/components';
import { FC } from 'react';
import { MicOff, User } from 'lucide-react';

interface RemotePeerProps {
  peerId: string;
}

const RemotePeer: FC<RemotePeerProps> = ({ peerId }) => {
  const { stream: videoStream, state: videoState } = useRemoteVideo({ peerId });
  const { stream: audioStream, state: audioState } = useRemoteAudio({ peerId });
  const { 
    videoStream: screenVideoStream, 
    audioStream: screenAudioStream,
    state: screenShareState 
  } = useRemoteScreenShare({ peerId });

  console.log(`📹 Peer ${peerId.slice(0, 8)} - Video:`, videoState, 'Audio:', audioState, 'Screen:', screenShareState);

  // Determine which video to show (screen share takes priority)
  const displayStream = screenVideoStream || videoStream;
  const isScreenSharing = !!screenVideoStream;

  return (
    <>
      {/* Main Video/Screen Share */}
      <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
        {displayStream ? (
          <Video stream={displayStream} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              <User className="w-12 h-12" />
            </div>
          </div>
        )}
        
        {/* Audio streams - hidden but necessary for audio playback */}
        {audioStream && <Audio stream={audioStream} />}
        {screenAudioStream && <Audio stream={screenAudioStream} />}
        
        {/* Peer Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-2">
          <span>{peerId.slice(0, 8)}...</span>
          {!audioStream && <MicOff className="w-4 h-4 text-red-400" />}
          {isScreenSharing && (
            <span className="ml-1 px-2 py-0.5 bg-blue-500 rounded text-xs">
              Sharing
            </span>
          )}
        </div>

        {/* Connection State Indicator */}
        {videoState === 'playable' && (
          <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full" title="Connected" />
        )}
      </div>
    </>
  );
};

export default RemotePeer;