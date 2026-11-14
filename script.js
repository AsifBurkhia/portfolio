const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const year = document.querySelector("#current-year");
const profilePhoto = document.querySelector(".avatar-photo");
const profileTrigger = document.querySelector(".avatar-trigger");
const hoverPreview = document.querySelector(".photo-hover-preview");
const photoDialog = document.querySelector(".photo-dialog");
const closePhotoDialog = document.querySelector(".photo-dialog-close");
const projectImageTriggers = document.querySelectorAll(".project-image-trigger");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (profilePhoto instanceof HTMLImageElement) {
  const revealProfilePhoto = () => {
    profilePhoto.hidden = false;
    profilePhoto.previousElementSibling?.setAttribute("hidden", "");
    if (profileTrigger instanceof HTMLButtonElement) {
      profileTrigger.disabled = false;
    }
  };

  profilePhoto.addEventListener("load", revealProfilePhoto);
  if (profilePhoto.complete && profilePhoto.naturalWidth > 0) {
    revealProfilePhoto();
  }
}

if (
  profileTrigger instanceof HTMLButtonElement &&
  hoverPreview instanceof HTMLElement &&
  photoDialog instanceof HTMLDialogElement
) {
  const hoverPreviewImage = hoverPreview.querySelector("img");
  const hoverPreviewTitle = hoverPreview.querySelector(".photo-preview-title");
  const hoverPreviewSubtitle = hoverPreview.querySelector(".photo-preview-subtitle");
  const dialogImage = photoDialog.querySelector(".photo-dialog-image");
  const dialogTitle = photoDialog.querySelector(".photo-dialog-title");
  const dialogSubtitle = photoDialog.querySelector(".photo-dialog-subtitle");
  const hideHoverPreview = () => hoverPreview.classList.remove("is-visible");

  const attachImagePreview = (
    trigger,
    image,
    title,
    subtitle,
    isProjectImage = false,
  ) => {
    const showHoverPreview = () => {
    if (
      photoDialog.open ||
      !(hoverPreviewImage instanceof HTMLImageElement) ||
      !(hoverPreviewTitle instanceof HTMLElement) ||
      !(hoverPreviewSubtitle instanceof HTMLElement)
    ) {
      return;
    }

    hoverPreviewImage.src = image.currentSrc || image.src;
    hoverPreviewTitle.textContent = title;
    hoverPreviewSubtitle.textContent = subtitle;
    hoverPreview.classList.toggle("is-project-preview", isProjectImage);
    hoverPreview.classList.add("is-visible");
    };

    trigger.addEventListener("pointerenter", showHoverPreview);
    trigger.addEventListener("pointerleave", hideHoverPreview);
    trigger.addEventListener("focus", showHoverPreview);
    trigger.addEventListener("blur", hideHoverPreview);
    trigger.addEventListener("click", () => {
    if (
      !(dialogImage instanceof HTMLImageElement) ||
      !(dialogTitle instanceof HTMLElement) ||
      !(dialogSubtitle instanceof HTMLElement)
    ) {
      return;
    }

    hideHoverPreview();
    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = image.alt;
    dialogTitle.textContent = title;
    dialogSubtitle.textContent = subtitle;
    photoDialog.setAttribute("aria-label", `Image preview: ${title}`);
    photoDialog.showModal();
    });
  };

  if (profilePhoto instanceof HTMLImageElement) {
    attachImagePreview(
    profileTrigger,
    profilePhoto,
    "Asif Hussain",
    "IT Infrastructure & Digital Transformation",
    );
  }

  projectImageTriggers.forEach((trigger) => {
    if (!(trigger instanceof HTMLButtonElement)) {
    return;
    }

    const image = trigger.querySelector(".project-image");
    const projectCard = trigger.closest(".project-card");
    const title = projectCard?.querySelector(".project-info h3")?.textContent?.trim();
    const subtitle = projectCard?.querySelector(".project-info .role-type")?.textContent?.trim();

    if (image instanceof HTMLImageElement && title && subtitle) {
    attachImagePreview(trigger, image, title, subtitle, true);
    }
  });

  photoDialog.addEventListener("click", (event) => {
    if (event.target === photoDialog) {
    photoDialog.close();
    }
  });
  photoDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
    event.preventDefault();
    photoDialog.close();
    }
  });
  photoDialog.addEventListener("close", hideHoverPreview);
  if (closePhotoDialog instanceof HTMLButtonElement) {
    closePhotoDialog.addEventListener("click", () => photoDialog.close());
  }
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      navigation.classList.remove("is-open");
    }
  });
}
