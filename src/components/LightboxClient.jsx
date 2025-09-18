"use client";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Download from "yet-another-react-lightbox/plugins/download";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function LightboxClient({ open, index, onClose, slides }) {
    return (
        <Lightbox
            open={open}
            close={onClose}
            index={index ?? 0}
            slides={slides}
            plugins={[Thumbnails, Captions, Download]}
            thumbnails={{ position: "bottom", vignette: false }}



            styles={{
                captionsTitle: { textAlign: "left" },
                captionsDescription: { textAlign: "center" },
            }}

            controller={{ closeOnBackdropClick: true }}
            animation={{ fade: 250, swipe: 300 }}
            carousel={{ finite: false }}
        />
    );
}
