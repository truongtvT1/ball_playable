using DG.Tweening;
using TMPro;
using UnityEngine;

namespace Projects.Scripts.UIController
{
    public class CoinValueText:MonoBehaviour
    {
        [SerializeField] private TextMeshProUGUI coinValueText;
        [SerializeField] private AnimationCurve curve;
        public void SetValue(int value)
        {
            coinValueText.text = "+"+value;
            coinValueText.transform.DOLocalMoveY(100, 1.5f).SetRelative(true).SetEase(curve);
            coinValueText.DOFade(0, 0.3f).SetDelay(1.5f).SetEase(Ease.OutQuad).OnComplete(Complete);
        }
        public void Complete()
        {
            DestroyImmediate(gameObject);
        }
    }
}